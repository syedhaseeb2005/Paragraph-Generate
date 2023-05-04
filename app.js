const para = ["Saylani, since its inception, has worked on both providing needed economic and nutritional help to the needy in distress as well as providing means for able-bodied persons to earn a living through innovative solutions to tackle the root causes and effects of poverty of Pakistani citizens<br>",
"The Roti Bank provides free meals to needy families in a simple walk-up kiosk along a main thoroughfare in Karachi After providing their identification details of family size (via birth certificates) and getting the Saylani Free Food Card the families can get 2 meals per day for a month<br>",
"During the COVID-19 crisis, Saylani Welfare Trust provided free oxygen, food, rescue equipment and other supplies to hospitals and Covid-19 wards in the country.It also introduced mobile phone application and telephone service, where needy families can register themselves to get ration and other essential items<br>",
"Arranging Marriages. Arranges minimum of Every month some 200 such girls are married by the help of Saylani Welfare TrustMedical CampsSadqa Bakra ServiceMass Training and Job Creation Program (New) Saylaniin corporation with Intel is starting a mass job training program with guarantee job placement. Only matriculates and Olevel students are allowed to appear in the program<br>",
"Educational Help : Saylani Welfare Trust has established more than 100 educational institutes and primary schools to educate thousands of students free of charge.Providing the Poor with Two Meals a Day(SAYLANI KA DASTARKHAWAN) : Saylani Welfare Trust arranges food twice a day on many places of Karachi for the low income people<br>",
"It should be noted that Allah who is in need of no one and nothing instills upon his men to give Qarz-e-Hasana because it is in mans nature to be frugal whilst spending his wealth. Allah speaks about qarz because it is returned and Allah promises that He will return the goodly loan by 70 folds. Allah conveys his message to the Muslim ummah through the Holy Prophet Muhammad prompting Muslims to spend their wealth in a certain way.<br>",
"Trust me with your wealth. If you do so, no fire, flood or thieves will be able to rob you off your money. Instead, you will be endowed with your wealth when you most need it. He further says that the poor and weak will not remain hungry and naked except due to the negligence of the rich<br>",
"Alhamdollilah, Allah has accorded Saylani Welfare with the highest favor by sending those people our way who follow the teachings of the Holy Quran and Hadith, give zakat, fidyah, fitrah, khairat and other donations to help us help those in need. The purpose of sending this message to you is so that you not only spread this message to others but also play your part in helping us to continue serving and helping the needy till the Day of Judgment.<br>"
]

const input = document.querySelector('input')
// console.log(input)
const generatebtn = document.querySelector('button')
// console.log(generatebtn)
const showparagraph = document.querySelector('.ParaGraph')
// console.log(showparagraph)
// box-shadow: 

generatebtn.addEventListener("click",()=>{
    const personinput = parseInt(input.value);
    let random = Math.floor(Math.random()* para.length);
    // para.style.boxshadow =  "rgba(0, 0, 0, 0.35) 0px 5px 15px;"
    if(input.value == '' || personinput < 0 || personinput > 8){
        showparagraph.innerHTML =  `<p>${para[random]}</p>`;
    }else{
        const personwantpara = para.slice(0 , personinput);
        let personparagraph = personwantpara.map((para)=>`<p>${para}</p>`).join("");
        showparagraph.innerHTML = personparagraph;
    }
})
