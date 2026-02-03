import React, { useState } from "react";

function StudentForm({ addStudent }) {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [dept, setDept] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent({ id: Date.now(), name, roll, dept });
    setName("");
    setRoll("");
    setDept("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: "1px solid #ccc", padding: "20px", marginBottom: "20px", borderRadius: "5px" }}>
      <h2>Add Student</h2>
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{ display: "block", margin: "10px 0", padding: "8px", width: "100%" }}
      />
      <input
        type="text"
        placeholder="Roll Number"
        value={roll}
        onChange={(e) => setRoll(e.target.value)}
        required
        style={{ display: "block", margin: "10px 0", padding: "8px", width: "100%" }}
      />
      <input
        type="text"
        placeholder="Department"
        value={dept}
        onChange={(e) => setDept(e.target.value)}
        required
        style={{ display: "block", margin: "10px 0", padding: "8px", width: "100%" }}
      />
      <button type="submit" style={{ padding: "8px 15px", background: "#007bff", color: "#fff", border: "none", borderRadius: "3px" }}>Add Student</button>
    </form>
  );
}

function StudentList({ students, deleteStudent }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "5px" }}>
      <h2>Student List</h2>
      {students.length === 0 && <p>No students added.</p>}
      {students.map((s) => (
        <div key={s.id} style={{ display: "flex", justifyContent: "space-between", margin: "10px 0", borderBottom: "1px solid #eee", paddingBottom: "5px" }}>
          <div>
            <p><strong>{s.name}</strong></p>
            <p>Roll: {s.roll} | Dept: {s.dept}</p>
          </div>
          <button onClick={() => deleteStudent(s.id)} style={{ padding: "5px 10px", background: "#dc3545", color: "#fff", border: "none", borderRadius: "3px" }}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => setStudents([...students, student]);
  const deleteStudent = (id) => setStudents(students.filter((s) => s.id !== id));

  return (
    <div style={{ maxWidth: "600px", margin: "50px auto", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>Student Management System</h1>
      <StudentForm addStudent={addStudent} />
      <StudentList students={students} deleteStudent={deleteStudent} />
    </div>
  );
}
