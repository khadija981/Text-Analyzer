function analyzeText() {
  const text = document.getElementById("textInput").value;

  // Characters (including spaces)
  const charCount = text.length;

  // Words
  const words = text.trim().split(/\s+/).filter(Boolean);
  const wordCount = words.length;

  // Sentences
  const sentenceCount = (text.match(/[.!?]+/g) || []).length;

  // Update UI
  document.getElementById("charCount").innerText = charCount;
  document.getElementById("wordCount").innerText = wordCount;
  document.getElementById("sentenceCount").innerText = sentenceCount;
}
document.addEventListener("DOMContentLoaded", function () {
  const textArea = document.getElementById("textInput");
  textArea.addEventListener("input", analyzeText);
});

