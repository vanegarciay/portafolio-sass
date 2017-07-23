$( document ).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var objectSelect = $("#contenedor-general");
        var objectPosition = objectSelect.offset().top;
        if (scroll > objectPosition) {
            $("nav").addClass("nav-alternative");
            console.log(scroll);
        } else {
            $("nav").removeClass("nav-alternative");
            console.log(scroll);
        }
    });
});