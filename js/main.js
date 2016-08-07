$(document).ready(function() {

    $('.testimonial').click(function() {
    	$(this).children('.testimonial-main').toggleClass('bglightpink');
    	$(this).children('.testimonial-main').toggleClass('bgdarkpink');
    	$(this).children().children('.name').toggleClass('hidden');
    	$(this).children().children('.name-bottom').toggleClass('hidden');
    	$(this).children().children('.quote').toggleClass('hidden');
    })
});