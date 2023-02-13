window.onload = function() {
    //Carga la pagina y ejecuta la función de animación de habilidades
    animacion();
}

$('document').ready(function() {
    const profesion = baffle(".profesion");
    profesion.set({
        characters: '█▓▓ ░░>██ ▓█▓>▓ ▓<█ ░<▒░▓ █░<█ █▒> ▓░▓< ▒▓░░',
        speed: 90
    });

    // Ejecuto el inicio de la animacion.
    profesion.start();
    // Establezco la duración que tendrá la animación antes de revelar el texto.
    profesion.reveal(3000);

    $('#tagline').t({
        beep: false,
        caret: '<span style="color:red;">_</span>',
        typing: function(elm, chr) {
            if (chr.match(/\-trigger/))
                $('#pow-txt').show().delay(500).fadeOut(0);
        }
    });

    $('#boton-correo').click(function() {
        window.open('mailto:contacto@mramirezm.com');
    });

    $('#boton-arriba').click(function() {
        $('body, html').animate({
            scrollTop: '0px'
        }, 300);
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('#boton-arriba').slideDown(300);
        } else {
            $('#boton-arriba').slideUp(300);
        }
        if ($(this).scrollTop() >= 1900 && $(this).scrollTop() <= 1950) {
            animacion();
        }
    });
});

//función de animación para las habilidades
function animacion() {
    animateprogress("#html5", 85);
    animateprogress("#css", 80);
    animateprogress("#bootstrap", 70);
    animateprogress("#javascript", 80);
    animateprogress("#jquery", 70);
    animateprogress("#nodejs", 60);
    animateprogress("#csharp", 50);
    animateprogress("#java", 80);
    animateprogress("#php", 60);
    animateprogress("#mysql", 80);
    animateprogress("#sql", 80);
    animateprogress("#postgresql", 70);
}