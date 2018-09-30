$("#generate").on('click', function(){
  $.ajax({
    method: "GET",
    url: "https://aws.random.cat/meow"
  })
  .done(function(data){
    $("#image").attr("src", data.file);
  })
  .fail(function(){
    alert("FAILED!");
  });
  $("h1").fadeOut();
  $("p").fadeOut();
});
