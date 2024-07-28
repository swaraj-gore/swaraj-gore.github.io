$(function () {
    let isNavOpen = false

    addRating()
    if(isDesktop()) {
        $('#nav').addClass('show')
        $('#linkedin, #email').css('display', 'block')
        $('#contact-me').css('display', 'none')
        $('#contact-me-link').css('display', 'none')
    } else {
        $('#nav').addClass('hidden')
        $('#linkedin, #email').css('display', 'none')
    }

    $('#open-nav, #close-nav').click(function() {
        if ($('#nav').hasClass('show')) {
            // hide nav
            $('#nav').removeClass('show');
            setTimeout(() => {
                $('#nav').addClass('hidden');
                $('#open-nav').css('opacity', '1')
            }, 500);
        } else {
            // show nav
            $('#nav').removeClass('hidden');
            $('#open-nav').css('opacity', '0')
            setTimeout(() => {
                $('#nav').addClass('show');
            }, 10);
        }
    });

    $('#nav ul li a').click(function () {
        $('#nav ul li a').removeClass('active')
        let clickedLink = $(this)
        clickedLink.addClass('active')
    })
    
})

function isDesktop() {
    return window.matchMedia("(min-width: 1141px)").matches;
}

function addRating() {
    const javaRating = 90
    const pythonRating = 80
    const javaScriptRating = 80
    $('#java .rating-value').css('width', `${javaRating}%`)
    $('#python .rating-value').css('width', `${pythonRating}%`)
    $('#javascript .rating-value').css('width', `${javaScriptRating}%`)

    const mysqlRating = 90
    $('#mysql .rating-value').css('width', `${mysqlRating}%`)

    const springRating = 80
    const springBootRating = 80
    const jpaHibernateRating = 80
    $('#spring .rating-value').css('width', `${springRating}%`)
    $('#spring-boot .rating-value').css('width', `${springBootRating}%`)
    $('#jpa-hibernate .rating-value').css('width', `${jpaHibernateRating}%`)

    const htmlRatingValue = 80
    const cssRatingValue = 80
    const jqueryRating = 80
    $('#html-skill .rating-value').css('width', `${htmlRatingValue}%`)
    $('#css-skill .rating-value').css('width', `${cssRatingValue}%`)
    $('#jquery-skill .rating-value').css('width', `${jqueryRating}%`)
}