$(document).ready(function () {
    $('#myCarousel').carousel({ interval: 1000 });
    $('#carouselButton').click(function () {
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#myCarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        } else {
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
            $('#myCarousel').carousel('cycle');
        }
    })

    $('#loginButton').click(function () {
        $('#loginModal').modal('toggle');
    });

    $('#reserveButton').click(function () {
        $('#reserveModal').modal('toggle');
    });
});


