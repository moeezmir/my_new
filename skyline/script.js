// Certificate Database
    const certificateDatabase = {
      
      "123456783": {
        name: "Demo one",
        course: "Diploma",
        issueDate: "21-07-2026",
        sessionStart: "17-11-2025",
        sessionEnd: "17-05-2026",
        marksObtained: 100,
        grandTotal: 100,
        status: "Verified",
        grade: "A+",
        // pdfUrl: "https://www.ncaskill.com/student_certs/NCAs26-1692.pdf"
      },
      "123456789": {
        name: "Demo two",
        course: "Diploma",
        issueDate: "21-07-2026",
        sessionStart: "17-11-2025",
        sessionEnd: "17-05-2026",
        marksObtained: 100,
        grandTotal: 100,
        status: "Verified",
        grade: "A+",
        // pdfUrl: "https://www.ncaskill.com/student_certs/NCAs26-1692.pdf"
      },
      "26072178909": {
        name: "SHEERAZA JAN",
        course: "Diploma in Computer Applications (DCA)",
        issueDate: "21-07-2026",
        sessionStart: "17-11-2025",
        sessionEnd: "17-05-2026",
        marksObtained: 94,
        grandTotal: 100,
        status: "Verified",
        grade: "A+",
        pdfUrl: "assets/cert/26072178909.pdf"
      },
      "26072131619": {
        name: "ASRAR FAYAZ",
        course: "Computer Basic Certificate",
        issueDate: "21-07-2026",
        sessionStart: "24-12-2025",
        sessionEnd: "24-03-2026",
        marksObtained: 97,
        grandTotal: 100,
        status: "Verified",
        grade: "A+",
        pdfUrl: "assets/cert/26072131619.pdf"
      },
      "260708651592": {
        name: "ASRAR FAYAZ",
        course: "Diploma in Tally Accounting",
        issueDate: "08-07-2026",
        sessionStart: "07-02-2026",
        sessionEnd: "07-05-2026",
        marksObtained: 94,
        grandTotal: 100,
        status: "Verified",
        grade: "A+",
        pdfUrl: "assets/cert/260708651592.pdf"
      },
      "260909651385": {
        name: "IRTIZA ALI",
        course: "Diploma in Tally Accounting",
        issueDate: "09-09-2026",
        sessionStart: "13-04-2026",
        sessionEnd: "13-07-2026",
        marksObtained: 81,
        grandTotal: 100,
        status: "Verified",
        grade: "A",
        pdfUrl: "assets/cert/260909651385.pdf"
      },
      "260909651384": {
        name: "AKEEL YOUSUF GANAIE",
        course: "Diploma in Tally Accounting",
        issueDate: "09-09-2026",
        sessionStart: "13-04-2026",
        sessionEnd: "13-07-2026",
        marksObtained: 90,
        grandTotal: 100,
        status: "Verified",
        grade: "A+",
        pdfUrl: "assets/cert/260909651384.pdf"
      },
      "26072878846": {
        name: "TAWHEED YOUNIS BHAT",
        course: "Diploma in Computer Applications (DCA)",
        issueDate: "28-07-2026",
        sessionStart: "30-10-2025",
        sessionEnd: "30-04-2026",
        marksObtained: 71,
        grandTotal: 100,
        status: "Verified",
        grade: "B+",
        pdfUrl: "assets/cert/26072878846.pdf"
      },
      "260909651383": {
        name: "UBAID HUSSAIN KUTHOO",
        course: "Diploma in Tally Accounting",
        issueDate: "09-09-2026",
        sessionStart: "13-04-2026",
        sessionEnd: "13-07-2026",
        marksObtained: 83,
        grandTotal: 100,
        status: "Verified",
        grade: "A",
        pdfUrl: "assets/cert/260909651383.pdf"
      },
      "26072178910": {
        name: "UZMA JAN",
        course: "Diploma in Computer Applications (DCA)",
        issueDate: "21-07-2026",
        sessionStart: "17-11-2025",
        sessionEnd: "17-05-2026",
        marksObtained: 96,
        grandTotal: 100,
        status: "Verified",
        grade: "A+",
        pdfUrl: "assets/cert/26072178910.pdf"
      },
      "260829651079": {
        name: "ZUHAIB SHABIR",
        course: "Diploma in Tally Accounting",
        issueDate: "29-08-2026",
        sessionStart: "31-01-2026",
        sessionEnd: "01-05-2026",
        marksObtained: 94,
        grandTotal: 100,
        status: "Verified",
        grade: "A+",
        pdfUrl: "assets/cert/260829651079.pdf"
      }
    };

    // Helper: Record Search
    function findStudentRecord(queryKey) {
      if (!queryKey) return null;
      const cleanKey = queryKey.trim().toUpperCase();
      if (certificateDatabase[cleanKey]) {
        return { key: cleanKey, record: certificateDatabase[cleanKey] };
      }
      for (const rawKey in certificateDatabase) {
        if (rawKey.trim().toUpperCase() === cleanKey) {
          return { key: rawKey, record: certificateDatabase[rawKey] };
        }
      }
      return null;
    }

    // Main Verification Function
    function verifyCertificate(event) {
      if (event) event.preventDefault();

      const inputEl = document.getElementById('cert-input');
      const resultDiv = document.getElementById('verify-result');

      // Safety check
      if (!inputEl || !resultDiv) return;

      const rawInputVal = inputEl.value;
      const cleanQuery = rawInputVal.trim();
      const match = findStudentRecord(cleanQuery);

      resultDiv.classList.remove('hidden');

      if (match) {
        const inputVal = match.key.trim();
        const student = match.record;
        
        const percentage = ((student.marksObtained / student.grandTotal) * 100).toFixed(1);
        const sessionText = `${student.sessionStart.trim()} — ${student.sessionEnd.trim()}`;
        const marksText = `${student.marksObtained} / ${student.grandTotal} (${percentage}%)`;
        const gradeDateText = `${student.grade} | ${student.issueDate.trim()}`;
        const cleanStudentName = student.name.trim();

        const certTextData = `==========================================
SKYLINE COMPUTERS SRINAGAR
Official Student Certificate Verification
==========================================

Status: ${student.status}
Student Name: ${cleanStudentName}
Certificate / Roll No: ${inputVal}
Course Enrolled: ${student.course.trim()}
Academic Session: ${sessionText}
Marks / Grand Total: ${marksText}
Grade / Issue Date: ${gradeDateText}

==========================================
Verified via Skyline Computers Student Portal
Ahad Complex, Lasjan A, Srinagar, J&K`;

        const encodedData = encodeURIComponent(certTextData);

        resultDiv.innerHTML = `
          <div class="flex items-center justify-between border-b border-slate-700 pb-3 mb-4">
            <div class="flex items-center gap-2 text-emerald-400 font-bold text-sm">
              <i class="fa-solid fa-circle-check text-base"></i> Authenticity Verified
            </div>
            <span class="px-2.5 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-400 border border-emerald-800 uppercase">
              ${student.status}
            </span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-6">
            <div>
              <span class="text-slate-400 block mb-0.5">Student Name</span>
              <strong class="text-white text-sm font-semibold">${cleanStudentName}</strong>
            </div>
            <div>
              <span class="text-slate-400 block mb-0.5">Certificate / Roll No</span>
              <strong class="text-amber-400 font-mono text-sm">${inputVal}</strong>
            </div>
            <div>
              <span class="text-slate-400 block mb-0.5">Course Enrolled</span>
              <strong class="text-slate-200">${student.course.trim()}</strong>
            </div>
            <div>
              <span class="text-slate-400 block mb-0.5">Academic Session</span>
              <strong class="text-slate-200">${sessionText}</strong>
            </div>
            <div>
              <span class="text-slate-400 block mb-0.5">Marks / Grand Total</span>
              <strong class="text-slate-200">${marksText}</strong>
            </div>
            <div>
              <span class="text-slate-400 block mb-0.5">Grade / Issue Date</span>
              <strong class="text-slate-200">${gradeDateText}</strong>
            </div>
          </div>

          <div class="pt-4 border-t border-slate-800 flex flex-wrap gap-3">
            <a href="${student.pdfUrl}" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg text-xs transition inline-flex items-center gap-2 cursor-pointer">
              <i class="fa-solid fa-file-pdf"></i> Download Certificate PDF
            </a>

            <a href="data:text/plain;charset=utf-8,${encodedData}" 
               download="${cleanStudentName.replace(/\s+/g, '_')}_${inputVal}.txt" 
               class="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-lg text-xs transition border border-slate-700 inline-flex items-center gap-2">
              <i class="fa-solid fa-file-lines"></i> Download Record (.txt)
            </a>
          </div>
        `;
      } else {
        resultDiv.innerHTML = `
          <div class="p-5 bg-slate-900/90 border border-rose-900/60 rounded-xl text-center relative overflow-hidden shadow-inner">
            <div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rose-950/80 border border-rose-800/80 text-rose-400 mb-3 shadow-sm">
              <i class="fa-solid fa-file-circle-xmark text-xl"></i>
            </div>

            <span class="block text-[10px] font-mono uppercase tracking-widest text-rose-400 font-bold mb-1">
              Error 404 — Record Not Found
            </span>

            <h3 class="text-base font-bold text-white mb-2">
              Certificate Unverified or Invalid
            </h3>

            <p class="text-xs text-slate-300 max-w-md mx-auto mb-4 leading-relaxed">
              No active student record matched 
              <code class="px-1.5 py-0.5 rounded bg-slate-800 text-amber-300 font-mono text-[11px] border border-slate-700">
                "${cleanQuery || 'Blank Input'}"
              </code>. 
              Please verify the registration number on your original document.
            </p>

            <button type="button" 
                    id="clear-btn"
                    class="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg border border-slate-700 transition inline-flex items-center gap-2 cursor-pointer">
              <i class="fa-solid fa-arrow-rotate-left"></i> Try Another Search
            </button>
          </div>
        `;
      }
    }

    // Attach Event Listeners safely when DOM is ready
    document.addEventListener('DOMContentLoaded', () => {
      const form = document.getElementById('cert-form');
      const inputEl = document.getElementById('cert-input');
      const resultDiv = document.getElementById('verify-result');

      if (form) {
        form.addEventListener('submit', verifyCertificate);
      }

      // Delegate sample button clicks
      document.addEventListener('click', (e) => {
        const sampleBtn = e.target.closest('.sample-btn');
        if (sampleBtn && inputEl) {
          const code = sampleBtn.getAttribute('data-sample');
          inputEl.value = code;
          inputEl.focus();
        }

        const clearBtn = e.target.closest('#clear-btn');
        if (clearBtn && inputEl && resultDiv) {
          inputEl.value = '';
          resultDiv.classList.add('hidden');
          resultDiv.innerHTML = '';
          inputEl.focus();
        }
      });
    });