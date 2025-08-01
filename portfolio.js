function section(info){
    const bot_text= document.getElementsByClassName('bottom_text');
    if (bot_text.length > 0){
        bot_text[0].classList.replace('bottom_text','bottom_text_ani');
    }
    let disappeared_btn = document.querySelectorAll(".animate");
    if (disappeared_btn.length>0){
        disappeared_btn[0].classList.replace('animate','section');
    }
    let ele =document.getElementById(info);
    ele.classList.remove("section");
    ele.classList.add("animate");
    dynamic_content(info);
}
function dynamic_content(info){
    const dy_element=document.getElementById('dynamic_content_div');
    /* inner html contents starts here to display the dynamic content */
    const dynamic_data={skills:`
        <div class="dynamic_head"><h3>Skills</h3></div>
        <div class="dynamic_maindata" id='dy_skills'>
        <span>
            <h4>🔹Programming Languages</h4>
            <p>▪Python</p> <br>
            <p>▪JavaScript</p> <br>
        </span>
        </span>
        <span>
            <h4>🔹Web Development</h4> <br>
            <p>▪HTML</p> <br>
            <p>▪CSS</p> <br>
            <p>▪Django</p> <br>
            <p>▪SQL</p> <br>
        </span>
        <span>
            <h4>🔹Data Structures & Algorithms</h4>
            <p>▪Arrays</p> 
            <p>▪Linked Lists</p> <br>
            <p>▪Trees</p> 
            <p>▪Recursion and Backtracking</p> <br>
            <p>▪Stacks & Queues</p> <br>
            <p>▪Dynamic Programming</p> <br>
        </span>
        <span>
            <h4>🔹Tools</h4>
            <p>▪Git (version control tool)</p> <br>
            <p>▪GitHub</p> <br>
            <p>▪VS Code</p> <br>
        </span>
        <span>
            <h4>🔹Problem Solving</h4>
            <p>▪Skilled in simplifying problems</p> <br>
            <p>▪Building structred solutions</p> <br>
        </span>
        </div>
    `,
    education:`
        <div class="dynamic_head"><h3>Education</h3></div>
        <div class="dynamic_maindata" id='dy_education'>
            <table>
            <thead>
                <tr>
                <th>Degree / Course</th>
                <th>Institution</th>
                <th>University / Board</th>
                <th>Year of Passing</th>
                <th>Percentage / CGPA</th>
                </tr>
            </thead>
            <tr>
                <td>B.Sc(Honours)Computer Science</td>
                <td>Govt Degree College Khairatabad,hyderabad</td>
                <td>Osmania University</td>
                <td>2027</td>
                <td>-</td>
            </tr>
            <tr>
                <td>Intermediate (MPC)</td>
                <td>TS Model School & Jr. College Lingapur</td>
                <td>Telangana State Board of Intermediate Eduction</td>
                <td>2023</td>
                <td>88.5%</td>
            </tr>
            <tr>
                <td>SSC</td>
                <td>TS Model School & Jr. College Lingapur</td>
                <td>Board of Secondary Education Telangana State</td>
                <td>2021</td>
                <td>9.5 GPA</td>
            </tr>
            </table>
        </div>
    `,
    certifications:`
    <div class="dynamic_head"><h3>Certifications</h3></div>
    <div id='dy_certifications'>
        <span>
            <h3>🔹160 days problem solving by GeeksforGeeks</h3>
            <img src="media/problem_solving.jpg" alt="160 days problem solving certification(loading error)">
            <p>
                Successfully completed the 160 Days Coding Challenge, consistently solving algorithm and data structure problems on the GeeksforGeeks platform. <br>
                Strengthened skills in arrays, strings, recursion, dynamic programming, trees, graphs, and more. <br>
                Enhanced logical thinking, problem-solving speed, and coding consistency.
            </p>
        </span>
        <span>
            <h3>🔹Python basic certification-HackerRank</h3>
            <img src="media/python_basic.jpg" alt="python-certification(loading error)">
            <p>Verified certification demonstrating proficiency in core Python programming concepts including data types, control structures, functions, and problem-solving. <br>
                Earned by successfully completing a timed assessment evaluated through code correctness, efficiency, and best practices. <br>
                Validates ability to solve real-world problems using Python and write clean, efficient, and correct code under constraints.</p>
        </span>
        <span>
            <h3>🔹SQL basic certification-HackerRank</h3>
            <img src="media/SQL_basic.jpg" alt="SQL-certification(loading error)">
            <p>
                Certified by HackerRank, proving my foundational expertise in SQL through a coding-based skills assessment. <br>
                The certificate confirms my ability to work with structured data, use JOINs, filters, aggregations, and <br> write queries to solve data-driven problems.
            </p>
        </span>
        <span>
            <h3>🔹Fullstack Developer virtual internship at Unified Mentor</h3>
            <img src="media/web_dev_intern.jpg" alt="web-intern-certification(loading error)">
            <p>
                Completed a hands-on virtual internship program focused on fullstack web development using modern technologies. <br>
                Gained experience building responsive and dynamic web applications using HTML, CSS, JavaScript, Bootstrap, and python, Django with MySQL as the backend. <br>
                Implemented RESTful APIs, handled CRUD operations, and worked on user authentication and routing. <br>
                Developed capstone projects showcasing front-end and back-end integration and deployment. <br>
                Enhanced debugging, Git version control.
            </p>
        </span>
    </div>
    `,
    projects:`
    <div class="dynamic_head"><h3>Projects</h3></div>
        <div id='dy_projects'>
            <span>
            <h3>🔹Online Messaging Web Application</h3>
            <span style="display:grid; grid-template-columns: repeat(2,1fr); grid-template-rows: repeat(2,1fr);">
                <img src="media/messaging1.jpeg" alt="project image loading error">
                <img src="media/messaging2.jpeg" alt="project image loading error">
                <img src="media/messaging3.jpeg" alt="project image loading error">
                <img src="media/messaging4.jpeg" alt="project image loading error">
            </span>
            <p>
                AIM/OBJECTIVE: <br>
                The main aim and objective of this project is to facilitate asynchronous
                conversations between users through dedicated chatrooms and ensure highly
                secure communication via text messages. <br>
                INTRODUCTION: <br>
                ▪In order to develop the asynchronous communication between the users a web
                socket connection is established, where the client do not want to send http
                requests repeatedly to send or receive messages. <br>
                ▪User can signup or create an account by providing the user name,e-mail id and
                password this user information is saved in the data base. The password that
                user provided in the time of signup is hashed for the additional security. <br>
                ▪After successful signup, the page automatically redirected to login page where
                the user can login into their account by providing the username and password
                which is given during the signup. <br>
                ▪After login, it shows all available chatrooms user can join the chat room by
                providing the password of that particular rom for the security reasons and start
                messaging with the users who joined the same chatroom these messages are
                saved in the data base and only visible to the users who are in the same chat room. <br>
                SOFTWARES USED: <br>
                    HTML <br>
                    CSS <br>
                    JAVA SCRIPT <br>
                    PYTHON <br>
                    DJANGO <br>
                    MYSQL <br>
                Here is the Github repository link--><a href="">Click here</a>
            </p>
            </span>
    <span>
    <h3>🔹Online Doctor Appointment</h3>
    <span style="display:grid; grid-template-columns: repeat(2,1fr); grid-template-rows: repeat(2,1fr);">
      <img src="media/docapp1.jpeg" alt="project image loading error">
      <img src="media/docapp2.jpeg" alt="project image loading error">
      <img src="media/docapp3.jpeg" alt="project image loading error">
      <img src="media/docapp4.jpeg" alt="project image loading error">
    </span>
    <p>
      The Online Doctor Appointment System is a web-based application designed to simplify and streamline the process of booking medical appointments for patients. <br>
      The platform serves as a digital bridge between doctors and patients, allowing users to conveniently access healthcare services from anywhere at any time. <br>
      This system provides a secure and user-friendly interface where patients can search for registered doctors, view available slots, and book appointments according to their needs. <br>
       It also offers doctors an easy way to manage appointments and maintain patient details efficiently. <br>
       💡 Key Features: <br>
            Doctor Registration: <br>
            Doctors can create an account by submitting their professional details, specialization, and availability schedule. <br>
            Patient Registration: <br>
            New users (patients) can sign up to access the portal and manage their medical appointments. <br>
            Doctor and Patient Login: <br>
            Secure login functionality for both doctors and patients with role-based access. <br>
            Appointment Booking: <br>
            Patients can view available time slots and book appointments with doctors based on their availability. <br>
            User-Friendly Interface: <br>
            A clean and responsive design ensures ease of use for all types of users, including those with minimal technical knowledge. <br>
            Secure Authentication: <br>
            Ensures user data protection through encrypted passwords and secure login mechanisms. <br>
            Doctor Search Functionality: <br>
            Patients can search for doctors based on name, specialization.
    </p>
  </span>
        </div>
    `,
    achievements:`
        <div class="dynamic_head"><h3>Achievements</h3></div>
        <div id='dy_achievements'class="dynamic_maindata">
        <span>
            <h3>🔹completed 30 days of code challange--HackerRank</h3>
            <h3>🔹completed 160 days of problem solving--GeeksforGeeks</h3>
            <h3>🔹completed virtual Internship--Unified Mentor</h3>
            <h3>🔹HackerRank Python 5-star badge</h3>
        </span>
        </div>
    `
    };
    dy_element.innerHTML=dynamic_data[info];
}
/* feedback section code starts from here*/
function recieve_feedback(){
    const element = document.getElementsByClassName('feedback');
    element[0].innerHTML=`<div class="recieve_feedback">
    <span><img src="icons/typing.png" alt="error while loading the icon"></span>
    <form action="https://formsubmit.co/vishnuvardhangopathi@gmail.com" method="POST"><textarea name="r_feedback" id="r_feedback" placeholder="Type your feedback or suggestions here" required></textarea><button type="submit">Submit</button></form>
  </div>`;
}
/* page details section code starts from here*/
function close_details(){
    let element = document.getElementsByClassName('about_page');
    if(element[0]){
        element[0].classList.replace('about_page','show_about_page');
    }
    else{
        let element = document.getElementsByClassName("show_about_page");
        element[0].classList.replace('show_about_page','about_page');
    }
}