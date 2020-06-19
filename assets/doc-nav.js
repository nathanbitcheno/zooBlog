/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myDocnav");
    if (x.className === "doc-nav") {
      x.className += " responsive";
    } else {
      x.className = "doc-nav";
    }
  }