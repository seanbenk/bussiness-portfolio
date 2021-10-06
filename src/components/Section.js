import React from "react";

function Section({ id, children, className }) {
  return (
    <section className={className} id={id} style={{ minHeight: "100vh" }}>
      {children}
    </section>
  );
}

export default Section;