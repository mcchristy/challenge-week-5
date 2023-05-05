// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {

  var input = document.getElementsByClassName("btn saveBtn");
  localStorage.setItem("server",input.val());

  document.getElementsByClassName("btn saveBtn").value = localStorage.getItem("server");

  let time = $("<p>");
  let day = $("<p>");
  let section1 = $("#hour-9");
  let section2 = $("hour-10");
  let section3 = $("hour-11");
  let section4 = $("hour-12");
  let section5 = $("hour-1");
  let section6 = $("hour-2");
  let section7 = $("hour-3");
  let section8 = $("hour-4");
  let section9 = $("hour-5");
  let section10 = $("hour-6");
  let section11= $("hour-7");
  let section12= $("hour-8");

  section1.val(localStorage.getItem("Entry1"));
  section2.val(localStorage.getItem("Entry2"));
  section3.val(localStorage.getItem("Entry3"));
  section4.val(localStorage.getItem("Entry4"));
  section5.val(localStorage.getItem("Entry5"));
  section6.val(localStorage.getItem("Entry6"));
  section7.val(localStorage.getItem("Entry7"));
  section8.val(localStorage.getItem("Entry8"));
  section9.val(localStorage.getItem("Entry9"));
  section10.val(localStorage.getItem("Entry10"));
  section11.val(localStorage.getItem("Entry11"));
  section12.val(localStorage.getItem("Entry12"));


  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
