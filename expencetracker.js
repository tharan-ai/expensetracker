function calculate() {
  const salary = parseFloat(document.getElementById("amount").value) || 0;
  const categories = ["transport", "shopping", "health", "education", "groceries", "restaurant", "gifts", "pets"];
  let total = 0;
  let data = [];

  categories.forEach(cat => {
    const value = parseFloat(document.getElementById(cat).value) || 0;
    total += value;
    data.push(value);
  });

  const savings = salary - total;


  document.getElementById("totalExpense").value = total;
  document.getElementById("savings").value = savings;

  renderChart(data, categories);
}

function renderChart(data, labels) {
  const ctx = document.getElementById("expenseChart").getContext("2d");
  if (window.expenseChart) window.expenseChart.destroy(); // Destroy previous chart

  window.expenseChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: [
          "#ff6384", "#36a2eb", "#cc65fe", "#ffce56",
          "#2ecc71", "#e74c3c", "#f39c12", "#3498db"
        ]
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom"
        }
      }
    }
  });
}
