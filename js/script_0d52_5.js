$(document).ready(function() {
    $.mobile.loading().hide();
    /* СЛАЙДЕР ОТЗЫВОВ*/

    $(".name").focus(function() {
        $(this).attr('placeholder', '');
    });

    $(".name").blur(function() {
        if ($(this).attr('value') == '') {
            $(this).attr('placeholder', 'Введите Ваше имя');
        }
    });

    $(".phone").focus(function() {
        $(this).attr('placeholder', '');
    });

    $(".phone").blur(function() {
        if ($(this).attr('value') == '') {
            $(this).attr('placeholder', 'Ваш номер телефона');
        }
    });

    /*Анимация загрузки*/
    $(".close").on( "click", function() {
        $(".loading").removeClass('display_block').addClass('display_none');
    });
    $(".form_button").on( "click", function() {
        if($(".name").val() != '' && $(".phone").val() != '') {
        $(".loading").removeClass('display_none').addClass('display_block');
        }
    });
    /*КОНЕЦ Анимация загрузки*/
    


    /*ПРОКРУТКА К ПОКУПКЕ*/
    $('.to_order_form').click(function() {
        var anchor = $(this).attr('href');
        $("html, body").animate({
            scrollTop: $(anchor).offset().top - 160 + "px"
        }, {
            duration: 400,
            easing: "swing"
        });
        return false;
    });
});

'use strict';
function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
r(function(){
    if (!document.getElementsByClassName) {
        // Поддержка IE8
        var getElementsByClassName = function(node, classname) {
            var a = [];
            var re = new RegExp('(^| )'+classname+'( |$)');
            var els = node.getElementsByTagName("*");
            for(var i=0,j=els.length; i < j; i++)
                if(re.test(els[i].className))a.push(els[i]);
            return a;
        }
        var videos = getElementsByClassName(document.body,"youtube");
    } else {
        var videos = document.getElementsByClassName("youtube");
    }
    var nb_videos = videos.length;
    for (var i=0; i < nb_videos; i++) {
        // Находим постер для видео, зная ID нашего видео
        videos[i].style.backgroundImage = 'url(https://optovyk.store/card_holder/img/sddefault.jpg)';
        // Размещаем над постером кнопку Play, чтобы создать эффект плеера
        var play = document.createElement("div");
        play.setAttribute("class","play");
        videos[i].appendChild(play);
        videos[i].onclick = function() {
            // Создаем iFrame и сразу начинаем проигрывать видео, т.е. атрибут autoplay у видео в значении 1
            var iframe = document.createElement("iframe");
            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
            if (this.getAttribute("data-params")) iframe_url+='&'+this.getAttribute("data-params");
            iframe.setAttribute("src",iframe_url);
            iframe.setAttribute("frameborder",'0');
            // Высота и ширина iFrame будет как у элемента-родителя
            iframe.style.width  = this.style.width;
            iframe.style.height = this.style.height;
            // Заменяем начальное изображение (постер) на iFrame
            this.parentNode.replaceChild(iframe, this);
        }
    }
});