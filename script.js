

//Meny
function myFunction() {
document.getElementById("dropdown").classList.toggle("show");
}

// lukker dropdown når knappen trykkes uttenfor menyen
window.onclick = function(event) {
  if (!event.target.matches('.navKnapp')) {
    let dropdowns = document.getElementsByClassName("navLinker");
    let i;
    //i++ betyr i=i+1
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show')
      }
    }
  }
}


//nyhetsbrev for Moki.ub lagret i local storage
//Lager tomt array
let abonnenter = []

  //Henter ut navn og epost fra HTML:
  let knappAbonn = document.getElementById("registrAbb")
  //  knappAbonn.addEventListener("click", registrNB)

  function registrNB() {
  let nyttNavn = document.getElementById("navnInput").value
  let nyEpost = document.getElementById("epostInput").value

  //Lager objekt av navn og epost
  let nyPerson = {navn: nyttNavn, epost: nyEpost}
  //Legger objektet til i arrayet
  abonnenter.push(nyPerson)

  //
  const registr = JSON.stringify(abonnenter)
  localStorage.mineAb = registr
  alert('Tusen takk for at du ville melde deg på vårt nyhetsbrev!')
}




//publiseringssystem
//registrere produkter
let vekt = []

let knappUtskrAbb = document.getElementById("skrivUtAbb")

//knappUtskrAbb.addEventListener("click", visProd)
let registProdKnapp = document.getElementById("registrProd")
// registProdKnapp.addEventListener("click", registrProd)

// lagrer variablene i local storage
function registrProd() {
  let nyOverSkr = document.getElementById("nyOskrift-input").value
  let nyTekst = document.getElementById("nyTekst-input").value
  // let nyBilde = document.getElementById("nyBilde-input").value

//Lager objekt av navn og epost
  let produkt = {overskrift: nyOverSkr, tekst: nyTekst} //bilde: nyBilde
  //Legger objektet til i arrayet
  vekt.push(produkt)

  // JSON= javascript object notation
  // JSON.stringify gjør om arrayet (vekt) til tekst
  const oversiktProd = JSON.stringify(vekt)

  localStorage.mineProd = oversiktProd

  //localStorage.mineAb = oversiktProd
}

//viser det du skal legge inn i siden i local storage
function visProd() {
//henter fra local storage
// JSON.parse gjør elementet tilbake til objekt 
let prodObj;
  if (localStorage.mineProd) {
    prodObj = JSON.parse(localStorage.mineProd)
  }
  else {
    return
  }
  for (let i = 0; i < prodObj.length; i++) {
  // [i] logger ut et variabel om gangen 
  console.log(prodObj[i])

  document.getElementById("prodObjOutputTittel").innerHTML+= prodObj[i].overskrift
  document.getElementById("prodObjOutputTekst").innerHTML+= prodObj[i].tekst
  // document.getElementById("prodObjOutputBilde").innerHTML+= prodObj[i].bilde
 }

}

//fjerner informasjonen fra local storage (HTML og JS)
function slettProd() {
  localStorage.removeItem("mineProd")
  visProd()
  window.location.reload();
}

