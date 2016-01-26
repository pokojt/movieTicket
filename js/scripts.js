function Ticket(movieName, time, age) {
  this.movieName = movieName;
  this.time = time;
  this.age = age;
}

Ticket.prototype.price = function() {
  var price = 8;
  var newMovies = ["The Revenant", "Star Wars"];

  for (var i = 0; i < newMovies.length; i++) {
    if (this.movieName === newMovies[i]) {
      price += 1;
    }
  }
  if (this.age < 12 || this.age >= 55) {
    price -= 1;
  }
  if (this.time < 4) {
    price -= 1;
  }
  return price;
};

$(document).ready(function() {
  var newTicket;
  $("form#movie-ticket").submit(function(event) {
      event.preventDefault();

      var movieOption = $("select#movies").val();
      var timeOption = $("select#time").val();
      var ageOption = $("select#age").val();
      var newTicket = new Ticket(movieOption, timeOption, ageOption);
      var price = newTicket.price();

    if (movieOption === "Not a Movie" || timeOption === "" || ageOption ==="") {
      return alert("Please fill in all fields");
      $(".show-ticket").hide();
    }


  $(".show-ticket").show();
  $("#nameOfMovie").text(" " + movieOption);
  $("#movieTime").text(" " + timeOption + "PM");
  $("#ticketPrice").text(" $" + price);


  });
});
