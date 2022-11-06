function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="assets/icons-${player1}.svg" alt="Bandeira do Brasil">
      <strong>${hour}</strong>
      <img src="assets/icons-${player2}.svg" alt="Bandeira da Sérvia">
    </li>
  `
}
let delay = -0.3;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
        <ul>
          ${games}
        </ul>
    </div>
  `
}
document.querySelector("#cards").innerHTML =
  createCard("24/11", "quinta", createGame("brazil", "16:00", "serbia")) +
  createCard("28/11", "segunda",
    createGame("korea", "10:00", "ghana") + 
    createGame("brazil", "13:00", "switzerland")
    ) +
  createCard("02/12", "sexta", createGame("brazil", "16:00", "cameroon"))