 function filterTable() {
  // Variables
  let form-control, table, rows, cells, location, filter;
  form-control = document.getElementById("locationDropdown");
  table = document.getElementById("orderListTable");
  rows = table.getElementsByTagName("option");
  filter = form-control.value;

  // Loops through rows and hides those with countries that don't match the filter
  for (let row of rows) { // `for...of` loops through the NodeList
    cells = row.getElementsByTagName("option");
    location = cells[1] || null; // gets the 2nd `td` or nothing
    // if the filter is set to 'All', or this is the header row, or 2nd `td` text matches filter
    if (filter === "All" || !location || (filter === location.textContent)) {
      row.style.display = ""; // shows this row
    }
    else {
      row.style.display = "none"; // hides this row
    }
  }
}