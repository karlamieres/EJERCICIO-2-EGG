var initialData = [
    { name: 'Chile', score: '500' },
    { name: 'Argentina', score: '300' },
    { name: 'Perú', score: '800' },
    { name: 'Bolivia', score: '200' },
    { name: 'Uruguay', score: '600' }
  ];
  
  var tableData = initialData.slice(); // Hacer una copia de initialData
  
  function renderTable() {
    var tableBody = document.querySelector('#dataTable tbody');
    tableBody.innerHTML = '';
  
    tableData.forEach(function (rowData) {
      var row = document.createElement('tr');
  
      var nameCell = document.createElement('td');
      nameCell.contentEditable = true;
      nameCell.innerText = rowData.name;
  
      var scoreCell = document.createElement('td');
      scoreCell.contentEditable = true;
      scoreCell.innerText = rowData.score;
  
      row.appendChild(nameCell);
      row.appendChild(scoreCell);
  
      tableBody.appendChild(row);
    });
  }
  
  function addRow() {
    var tableBody = document.querySelector('#dataTable tbody');
  
    var newRow = document.createElement('tr');
  
    var nameCell = document.createElement('td');
    nameCell.contentEditable = true;
  
    var scoreCell = document.createElement('td');
    scoreCell.contentEditable = true;
  
    newRow.appendChild(nameCell);
    newRow.appendChild(scoreCell);
  
    tableBody.appendChild(newRow);
  }
  
  function resetTable() {
    tableData = initialData.slice();
    renderTable();
  }
  
  document.getElementById('resetBtn').addEventListener('click', resetTable);
  document.getElementById('addRowBtn').addEventListener('click', addRow);
  
  renderTable();
  