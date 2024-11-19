import React, { useEffect, useRef } from 'react'

function TenthForm() {
    let firstNameInputRef = useRef();
    let lastNameInputRef = useRef();
    let engInputRef = useRef(); 
    let telInputRef = useRef();
    let hindiInputRef = useRef();
    let mathsInputRef = useRef();
    let sciInputRef = useRef();
    let socInputRef = useRef();
    let resultParaRef =useRef();

    let firstNameSpanRef = useRef();
    let lastNameSpanRef = useRef();
    let engSpanRef = useRef();
    let telSpanRef =useRef();
    let hindiSpanRef = useRef();
    let mathsSpanRef = useRef();
    let sciSpanRef = useRef();
    let socSpanRef = useRef();

    useEffect(()=>{
        console.log("Component Loaded")
    },[]);
  return (
    <div>
      <form>
        <div>
            <label>First Name</label>
            <input ref={firstNameInputRef}
            onFocus={()=>{
                firstNameInputRef.current.style.backgroundColor = "violet";
                console.log("FirstName onFocus");
             }}
             onBlur={()=>{
                firstNameInputRef.current.style.backgroundColor = "";
                console.log("FirstName onBlur")
             }}></input>
            <span ref={firstNameSpanRef}></span>
        </div>
        <div>
            <label>Last Name</label>
            <input ref={lastNameInputRef}
            onFocus={()=>{
               lastNameInputRef.current.style.backgroundColor = "violet";
                console.log("LastName onFocus");
             }}
             onBlur={()=>{
                lastNameInputRef.current.style.backgroundColor = "";
                console.log("LastName onBlur")
             }}></input>
            <span ref={lastNameSpanRef}></span>
        </div>
        <div>
            <label>English</label>
            <input ref={engInputRef}
             onFocus={()=>{
                engInputRef.current.style.backgroundColor = "violet";
                console.log("Eng onFocus");
             }}
             onChange={()=>{
              engSpanRef.current.innerHTML = engInputRef.current.value >=35?"Pass":"Fail" 
              engSpanRef.current.style.backgroundColor = engInputRef.current.value >=35?"green":"red" 
            }}
             onBlur={()=>{
                engInputRef.current.style.backgroundColor = "";
                console.log("Eng onBlur");
             }}
             ></input>
            <span ref={engSpanRef}></span>
        </div>
        <div>
            <label>Telugu</label>
            <input ref={telInputRef}
             onFocus={()=>{
                telInputRef.current.style.backgroundColor="violet";
                console.log("Tel onFocus");
             }}
             onChange={()=>{  
              telSpanRef.current.innerHTML = telInputRef.current.value >=35?"Pass":"Fail"
              telSpanRef.current.style.backgroundColor = telInputRef.current.value>=35?"green":"red"
            }}
             onBlur={()=>{
                telInputRef.current.style.backgroundColor = "";
                console.log("Tel onBlur");
             }}></input>
            <span ref={telSpanRef}></span>
        </div>
        <div>
            <label>Hindi</label>
            <input ref={hindiInputRef}
             onFocus={()=>{
                hindiInputRef.current.style.backgroundColor = "violet";
                console.log("Hindi onFocus");
             }}
             onChange={()=>{
                hindiSpanRef.current.innerHTML = hindiInputRef.current.value >=35?"Pass":"Fail"
              hindiSpanRef.current.style.backgroundColor = hindiInputRef.current.value>=35?"green":"red"
             }}
             onBlur={()=>{
                hindiInputRef.current.style.backgroundColor = "";
                console.log("Hindi onBlur");
             }}></input>
            <span ref={hindiSpanRef}></span>
        </div>
        <div>
            <label>Mathematics</label>
            <input ref={mathsInputRef}
             onFocus={()=>{
               mathsInputRef.current.style.backgroundColor = "violet";
                console.log("Maths onFocus");
             }}
             onChange={()=>{
               mathsSpanRef.current.innerHTML = mathsInputRef.current.value >=35?"😊":"😞"
            //   mathsSpanRef.current.style.backgroundColor = mathsInputRef.current.value>=35?"green":"red"
             }}
             onBlur={()=>{
               mathsInputRef.current.style.backgroundColor = "";
                console.log("Maths onBlur");
             }}></input>
            <span ref={mathsSpanRef}></span>
        </div>
        <div>
            <label>Science</label>
            <input ref={sciInputRef}
             onFocus={()=>{
              sciInputRef.current.style.backgroundColor = "violet";
                console.log("Sci onFocus");
             }}
             onChange={()=>{
                sciSpanRef.current.innerHTML = sciInputRef.current.value >=35?"Pass":"Fail"
              sciSpanRef.current.style.backgroundColor = sciInputRef.current.value>=35?"green":"red"
             }}
             onBlur={()=>{
               sciInputRef.current.style.backgroundColor = "";
                console.log("Sci onBlur");
             }}></input>
            <span ref={sciSpanRef}
            ></span>
        </div>
        <div>
            <label>Social</label>
            <input ref={socInputRef}
             onFocus={()=>{
                socInputRef.current.style.backgroundColor = "violet";
                console.log("Soc onFocus");
             }}
             onChange={()=>{
             socSpanRef.current.innerHTML = socInputRef.current.value >=35?"Pass":"Fail"
              socSpanRef.current.style.backgroundColor = socInputRef.current.value>=35?"green":"red"
             }}
             onBlur={()=>{
                socInputRef.current.style.backgroundColor = "";
                console.log("Soc onBlur");
             }}></input>
            <span ref={socSpanRef}
            ></span>
        </div>
        <div>
            <button type='button' onClick={()=>{

                
               let firstName = firstNameInputRef.current.value;
               let lastName = lastNameInputRef.current.value;
               let engMarks = Number(engInputRef.current.value);
               let telMarks = Number(telInputRef.current.value);
               let hindiMarks = Number(hindiInputRef.current.value);
               let mathsMarks =Number(mathsInputRef.current.value);
               let sciMarks = Number(sciInputRef.current.value);
               let socMarks =Number(socInputRef.current.value);
                
               let totalMarks = engMarks+telMarks+hindiMarks+mathsMarks+sciMarks+socMarks;

               let perc = (totalMarks/600)*100;

               engSpanRef.current.innerHTML = engMarks >=35?"Pass":"Fail"
               telSpanRef.current.innerHTML = telMarks >=35?"Pass":"Fail"
               hindiSpanRef.current.innerHTML = hindiMarks >=35?"Pass":"Fail"
               mathsSpanRef.current.innerHTML = mathsMarks >=35?"Pass":"Fail"
               sciSpanRef.current.innerHTML = sciMarks >=35?"Pass":"Fail"
               socSpanRef.current.innerHTML = socMarks >=35?"Pass":"Fail" 

               resultParaRef.current.innerHTML = `${firstName} ${lastName} got  totalmarks of ${totalMarks} with percentage of ${perc}%`;



            }}>Calculate Result</button>
        </div>
        <div>
            <p ref={resultParaRef}>please enter values</p>
        </div>
      </form>
    </div>
  )
}

export default TenthForm
