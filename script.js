$("#submit").click(function() {
  var date = new Date();
  var dateString = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear().toString().substr(2, 2);

  $(".notes").append("<li>" + dateString + ": " + $(".new-entry").val() + "</li>");
});

$('.new-entry').focus(function() {
   $(this).val('');
});