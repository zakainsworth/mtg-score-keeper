$(document).ready(function() {
  $('.btn').tap(function() {
    var player = $(this).data('player');
    var new_total = parseInt($('#player'+player+'-life').text()) + parseInt($(this).data('value'));
    $('#player'+player+'-life .ui-btn-text').text(new_total);
    checkForWinners();
  });
});

function checkForWinners() {
  $('.life').each(function() {
    var player = $(this).data('player');
    if ($(this).text() < 1) {
      if (player == 1) {winner = 2} else {winner = 1}
      var name = $('#player'+winner+'-name').val() || 'Player '+winner;
      answer = confirm(name+" wins the match!\n\nPress OK to reset life totals.");
      if (answer) {reset();}
    }
  });
}

function reset() {
  $('.life .ui-btn-text').each(function() {
    $(this).text(20);
  });
}