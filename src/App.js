import React from "react"
import "./App.css"
import logo from "./image/logo.svg"
import lady from "./image/lady.png"
import tpp from "./image/tpp.png"
import clock from "./image/clockicon.png"
import dollar from "./image/dollaricon.png"
import purple from "./image/purpleicon.png"
import orange from "./image/orangeicon.png"
import pearsons from "./image/pearsons.png"
import brewdog from "./image/brewdoglogo.png"
import bridgestone from "./image/bridgestonelogo.png"
import travix from "./image/travixlogo.png"
import klarna from "./image/klarnalogo.png"
import vice from "./image/vicelogo.png"
import deichmann from "./image/deichmann.png"
import waterstons from "./image/watersonslogo.png"
import kiverr from "./image/kiverrlogo.png"
import ev from "./image/evlogo.png"
import alibert from "./image/alibertlogo.png"
import multichoice from "./image/multichoicelogo.png"
import bluenile from "./image/bluenile.png"
import trainline from "./image/trainlinelogo.png"
import itv from "./image/itvlogo.png"
import deliveryhero from "./image/deliveryherologo.png"
import kate from "./image/katemedialogo.png"
import string from "./image/strings1.png"
import strings from "./image/strings2.png"
import culture from "./image/culture.jpg"
import diversity from "./image/diversity.png"
import experience from "./image/experience.jpg"
import team from "./image/team.jpg"


function App() {
  return (
    <div className="container">
      <div className="header">
        <div className="headerwrapper">
          <div><img src={logo} className="logo"></img></div>
          <div className="nav">
            <p>Products</p>
            <p>Platform</p>
            <p>Company</p>
            <p>Resources</p>
            <p>Customers</p>
            <p>Support</p>
        </div>
      </div>
    </div>
    <div className="heroholder">
      <div className="herowrapper">
        <div className="left">
        <h1 className="heads">Delight made
         <br/>easy </h1>
         <p className="heads2">we make it fast and easy for your business to delight 
         <br/>customers and employees.</p>
         <div className="button">
           <button className="but1">Free Trails</button>
           <button className="but2">Contact Sales</button>
         </div>
         </div>
     <div><img src={lady} className="ladyfw"/></div>
     </div>
    </div>
    <div className="container2">
    <div className="layerwrapper"> 
      <div><img src={tpp} className="tppfw"/></div>
      <div className="side">
        <h1>Try the business software used by over
        <br/>50,000 companiess acroos the globe to
        <br/>exceed customer and employee<br/>
        expectations.</h1>
        <div className="layer">
         <div className="service">
         <button className="items">Customer Service</button>
         <button className="items1">HR Management</button> 
         <button className="items2">Market Automation</button>
         </div>
        <div className="service1">
         <button className="item3">IT Management</button>
         <button className="items4">Sales Automation</button>
         <button className="items5">All Products & Trials</button>
         </div>
         </div>
      </div>
    </div>
    </div> 
  <div className="container3">
   <div classname="logowrapper">
   <h2 className="less">Frictionless,simple,easy</h2>
     <p className="fr">Freshworks make it fast and easy for business to delight their 
          customers and emploees.</p>
     <p className="fr1"> We take a fresh approach to how businesses discover,engage
          with, and realize value from software throughout their journey.</p>
     </div>
  <div className="icons">
   <div className="iconswrapper">
    <div className="orangewrap">
     <div><img src={orange} className="orangefw"/></div>
     <div className="orangetext">
     <h3>Get up and running with no barriers</h3>
     <p>Try or purchase our software directly from our website <br/>
      and onboard in a matter of days, not month</p>
      <div><img src={purple} className="purplefw"/></div>
      <div className="purple">
      <h3>Build and customize as you go</h3>
      <p>Extend and tailor experiences to meet your unique<br/>
      business needs with low code development and over 1,100<br/>
      custom apps made availble on our marketplace</p>
      </div>
      </div>
      </div>
      </div>
   </div>
 <div className="dollswrapper">
 <div><img src={dollar} className="dollarfw"/></div>
 <div className="dollstext">
   <h3>Choose your pricing plan</h3>
        <p>Our pricing plans are designed for modern business use <br/>
        cases and affordable for organizations of all sizes</p>
        </div>
    <div className="clock">
    <div><img src={clock} className="clockfw"/></div>
     <h3>Create value, fast</h3>
     <p>Accelerate your teams's prouctivity and efficiency<br/>
     with modern automation and collaboration tools to<br/>
     get tangile results in no time</p>
        </div>
        </div>
        </div>
  <div className="container4">
   <div className="trustext">
     <h2 className="big">Trusted by 50k+ customers big and small</h2>
     <p className="provider">We are a leading provider of modern SaaS solution that solve multiple, complex
      business problems to companies of all sizes. Businesses from <br/> more than 120 countries around the
      world use Freshworks' products to delight their customers and employees everyday</p>
    </div>
   <div className="trusting">
     <div className="brands">
     <img src={pearsons}/>
     <img src={brewdog}/>
     <img src={bridgestone}/>
     <img src={travix}/>
     <img src={klarna}/>
     <img src={vice}/>
    </div>
     <div className="brands2">
     <img src={deichmann}/>
     <img src={waterstons}/>
     <img src={kiverr}/>
     <img src={ev}/>
     <img src={alibert}/>
     <img src={multichoice}/>
     </div>
     <div className="brands3">
     <img src={bluenile}/>
     <img src={trainline}/>
     <img src={itv}/>
     <img src={deliveryhero}/>
     <img src={kate}/>
     </div>
     </div>
     <div className="quote">
     <div className="quotewrapper">
     <img src={string} className="string"/>
     <img src={waterstons} className="waterstons2"/>
     <img src={strings} className="strings"/>
     </div>
     <div className="quotext">
     <p className="par">"The freshworks team was a great asser during implementation and continue to be a key partner<br/>
     for watersons as we lookto futher mature and improve our services to cutomers, tailored to <br/>
     their specific needs."</p>
     <h4>Alex Bookless, Head of Managed services,Waterstons</h4>
     </div>
     </div>
     <div className="aspire">
     <div className="aspiretop">
     <h5>We aspire to be one of the most loved companies in the world</h5>
     </div>
     <div className="aspirewrapper">
     <div className="aspiredown">
      <div className="culturelay">
        <img src={culture} className="culture"/>
        <h2>Culture</h2>
        <p>A culture that supports high-<br/>quality work,
        joy and pride in that<br/>work speed o execution, and <br/>intense customer focus</p></div>
     <div className="diversity" className="diversitylay">
      <img src={diversity} className="diversity"/>
      <h2> Diversity</h2>
      <p>Full-spectrum diversity, equity,<br/>
      and inclusion are key priorties for <br/>
      us</p></div>
     <div className="experiencelay">
     <img src={experience} className="experience"/>
     <h2>Experience</h2>
     <p>Focus on enhancing the team <br/>
     experience by strengthening our<br/>
     managers'leadership capabilities.</p></div>
     <div className="team">
     <img src={team} className="team"/>
     <h2>Team</h2>
     <p>4,000 employees and growing in <br/>
     offices across India,US,Europe,<br/>
     and Australia.</p></div>
     </div> 
     </div>
     <button className="b7">SEE LIFE AT FRESHWORKS</button>
     </div> 
    <div className="ready">
    <div className="readytext">
      <h1>Ready to get started?</h1>
      <p>Join our community of 50,000 companies of all sizes who use freshworks' modern SaaS
        products to make it fast and easy to<br/>delight their customers and empolyees</p>
      <button className="b8">CONTACT SALES</button>
      </div>
      </div>
 <div className="foot">
      <div className="terms">
        Terms of service - Privacy Notice - Takedown Policy - GDPR -Security - CS Policy - Tax FAQs - Unsubcribe</div>
    <div className="copyright"> Copyright (c) Freshworks Inc. All Rights Reserved
    </div>
  </div>
  </div>
  <div>
  </div>
  </div>
  
 );
}

export default App