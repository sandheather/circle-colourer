var $html = $('html');
var $ball = $('.ball');
var $picker = $('form');
var $input = $('#color-picker');

$picker.on('change', function () {
  $ball.css('background-color', $input.val());
});

