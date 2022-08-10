var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["United States", "Spain", "United Kingdom", "Germany", "France", "Democratic Republic Of The Congo", "Nigeria", "Ghana"],
      datasets: [{
        label: 'Number of Cases',
        data: [8.933, 4.942, 2.859, 2.916, 2.423, 0.163, 0.133, 0.030],
        backgroundColor: "rgba(255,153,0,0.4)"
        
    },]

  }
});