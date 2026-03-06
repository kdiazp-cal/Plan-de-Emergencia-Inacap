
// ===============================
// PLAN DE EMERGENCIA INACAP CALAMA
// Versión corregida GitHub Pages
// ===============================

const $ = (id) => document.getElementById(id);

// Elementos base
const siteSelect = $("siteSelect");
const floorWrap = $("floorWrap");
const floorSelect = $("floorSelect");
const btnPlano = $("btnPlano");
const btnMiPlano = $("btnMiPlano");
const btnMapa = $("btnMapa");
const btnEmergencia = $("btnEmergencia");
const emGrid = $("emGrid");
const viewer = $("viewer");
const viewerTitle = $("viewerTitle");
const viewerSubtitle = $("viewerSubtitle");
const btnClose = $("btnClose");
const contentWrap = $("contentWrap");
const viewerFooter = $("viewerFooter");
const btnZoomIn = $("btnZoomIn");
const btnZoomOut = $("btnZoomOut");
const btnOpenImg = $("btnOpenImg");
const btnInfo = $("btnInfo");
const infoDialog = $("infoDialog");
const btnInfoClose = $("btnInfoClose");
const btnOk = $("btnOk");
const alertBar = $("alertBar");
const alertTitle = $("alertTitle");
const alertMsg = $("alertMsg");
const btnAlertClose = $("btnAlertClose");
const lastLocation = $("lastLocation");
const toastOverlay = $("toastOverlay");
const toastTitle = $("toastTitle");
const toastSubtitle = $("toastSubtitle");
const toastBody = $("toastBody");
const btnToastClose = $("btnToastClose");

// Overlay emergencia real
const realEmergencyOverlay = $("realEmergencyOverlay");
const realEmergencyLocation = $("realEmergencyLocation");
const realEmergencyType = $("realEmergencyType");
const realEmergencyMessage = $("realEmergencyMessage");
const btnStudentReport = $("btnStudentReport");
const btnStudentSafe = $("btnStudentSafe");
const btnStudentHelp = $("btnStudentHelp");

// Login coordinador
const coordinatorLoginModal = $("coordinatorLoginModal");
const btnCoordLoginClose = $("btnCoordLoginClose");
const coordUser = $("coordUser");
const coordPass = $("coordPass");
const btnCoordLogin = $("btnCoordLogin");
const coordLoginStatus = $("coordLoginStatus");

// Panel coordinador
const coordinatorPanelModal = $("coordinatorPanelModal");
const btnCoordPanelClose = $("btnCoordPanelClose");
const coordEmergencyType = $("coordEmergencyType");
const coordOtherWrap = $("coordOtherWrap");
const coordEmergencyOther = $("coordEmergencyOther");
const coordEmergencyLocation = $("coordEmergencyLocation");
const coordEmergencyMessage = $("coordEmergencyMessage");
const btnActivateEmergency = $("btnActivateEmergency");
const btnFinishEmergency = $("btnFinishEmergency");
const coordPanelStatus = $("coordPanelStatus");

// Formularios visibles
const reportForm = $("reportForm");
const reportTipo = $("reportTipo");
const reportUbicacion = $("reportUbicacion");
const safeForm = $("safeForm");
const safeUbicacion = $("safeUbicacion");

const labels = {
  sede_principal: "Sede Principal (Av. Granaderos 3.250)",
  subsede_logistica_prevencion: "Subsede Logística y Prevención (Argentina 3.392)",
  subsede_mantenimiento_plantas_mineras: "Subsede Mant. Plantas Mineras (Granaderos 3.479)",
  subsede_maquinaria_pesada: "Subsede Maquinaria Pesada (Granaderos 3.685)",
  centro_de_negocios: "Centro de Negocios (Granaderos 3.005)"
};

const emergencies = [
  {
    id: "incendio",
    icon: "🔥",
    name: "Incendio",
    desc: "Avisar y evacuar si está fuera de control.",
    bullets: [
      "Si es un fuego incipiente: avisa de inmediato a seguridad o monitores.",
      "Si el fuego está declarado: evacúa por vías señalizadas.",
      "No te devuelvas hasta nueva instrucción."
    ]
  },
  {
    id: "sismo",
    icon: "🌎",
    name: "Sismo / Terremoto",
    desc: "Protégete de caídas y evacúa cuando se indique.",
    bullets: [
      "Permanece en el lugar y evalúa la intensidad.",
      "Protégente de elementos que puedan caer.",
      "Evacúa cuando lo indique el Jefe de Emergencia o monitores."
    ]
  },
  {
    id: "gas",
    icon: "🧯",
    name: "Fuga de gas",
    desc: "Cortar suministros y evacuar.",
    bullets: [
      "No enciendas ni apagues interruptores.",
      "Evacúa la totalidad del recinto.",
      "El control del suministro lo hace personal autorizado."
    ]
  },
  {
    id: "electrica",
    icon: "⚡",
    name: "Emergencia eléctrica",
    desc: "Cortar suministros y evacuar.",
    bullets: [
      "No manipules instalaciones si no estás autorizado.",
      "Evacúa si así lo indica el personal de la sede.",
      "Mantente alejado de tableros o cables."
    ]
  },
  {
    id: "bomba",
    icon: "💣",
    name: "Amenaza de bomba",
    desc: "Mantener calma, avisar y evacuar.",
    bullets: [
      "Mantén la calma.",
      "Sigue instrucciones del personal autorizado.",
      "Evacúa y no reingreses hasta nueva instrucción."
    ]
  },
  {
    id: "vecina",
    icon: "🏭",
    name: "Emergencia vecina",
    desc: "Atento a incidentes externos.",
    bullets: [
      "Mantente atento a instrucciones institucionales.",
      "Podría requerirse evacuación preventiva.",
      "Reingresa solo con autorización."
    ]
  },
  {
    id: "medica",
    icon: "🚑",
    name: "Emergencia médica",
    desc: "Calma, no aglomerar, pedir ayuda.",
    bullets: [
      "No aglomeres alrededor de la persona afectada.",
      "Avisa a personal de la sede.",
      "Si hay riesgo vital, llama a SAMU 131."
    ]
  },
  {
    id: "balacera",
    icon: "🔫",
    name: "Balacera / violencia externa",
    desc: "Refúgiate, agáchate y cúbrete.",
    bullets: [
      "Refúgiate dentro de una sala o espacio seguro.",
      "Agáchate y cúbrete la cabeza.",
      "No evacúes sin instrucción de seguridad."
    ]
  }
];

const FORM_LINKS = {
  report: "", // pega aquí el link de Formulario 1 si luego lo creas
  state: ""   // pega aquí el link de Formulario 2 si luego lo creas
};

const EMAILS = "kdiazp@inacap.cl,mroco@inacap.cl,d_castillo@inacap.cl,orodriguezi@inacap.cl,otorres@inacap.cl";
const EMERGENCY_STORAGE_KEY = "pe_real_emergency_v2";
const ALERT_JSON_URL = "./alerta.json";
let zoom = 1;

// -----------------------------------
// Utilidades
// -----------------------------------
function isSedePrincipal() {
  return siteSelect?.value === "sede_principal";
}

function currentLocationLabel() {
  if (!siteSelect) return "";
  const site = siteSelect.value;
  const floor = floorSelect?.value || "";
  if (site === "sede_principal") {
    const piso = floor === "subterraneo" ? "Subterráneo" : floor.replace("piso", "Piso ");
    return `${labels.sede_principal} – ${piso}`;
  }
  return labels[site] || "";
}

function updateLastLocation() {
  if (!lastLocation) return;
  const txt = currentLocationLabel();
  lastLocation.innerHTML = `📍 Última ubicación seleccionada: <b>${txt}</b>`;
  lastLocation.hidden = !txt;
}

function updateFormPrefill() {
  const loc = currentLocationLabel();
  if (reportUbicacion) reportUbicacion.value = loc;
  if (safeUbicacion) safeUbicacion.value = loc;
}

function syncUI() {
  if (floorWrap) floorWrap.hidden = !isSedePrincipal();
  localStorage.setItem("pe_site", siteSelect?.value || "");
  localStorage.setItem("pe_floor", floorSelect?.value || "");
  updateLastLocation();
  updateFormPrefill();
}

function planKey() {
  if (isSedePrincipal()) {
    const f = floorSelect.value;
    if (f === "piso1") return "sede_principal_piso1";
    if (f === "piso2") return "sede_principal_piso2";
    if (f === "piso3") return "sede_principal_piso3";
    return "sede_principal_subterraneo";
  }
  return siteSelect.value;
}

function planTitle() {
  if (isSedePrincipal()) {
    const f = floorSelect.value;
    const piso = f === "subterraneo" ? "Subterráneo" : f.replace("piso", "Piso ");
    return `Plano Evacuación – ${labels.sede_principal} – ${piso}`;
  }
  return `Plano Evacuación – ${labels[siteSelect.value]}`;
}

function buildMailto(to, subject, body) {
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// -----------------------------------
// Visor imágenes / texto
// -----------------------------------
function openViewerAsImage(src, title, subtitle = "") {
  if (!viewer) return;
  viewer.hidden = false;
  viewerTitle.textContent = title;
  viewerSubtitle.textContent = subtitle;
  contentWrap.innerHTML = `<div class="imgWrap"><img id="viewerImg" alt="${title}" src="${src}" /></div>`;
  viewerFooter.hidden = false;
  btnOpenImg.href = src;
  zoom = 1;
  viewer.scrollIntoView({ behavior: "smooth", block: "start" });
}

function closeViewer() {
  if (viewer) viewer.hidden = true;
}

function openToastText(title, subtitle, bullets, note = "") {
  if (!toastOverlay) return;
  toastTitle.textContent = title;
  toastSubtitle.textContent = subtitle || "";
  const items = bullets.map((b) => `<li>${b}</li>`).join("");
  toastBody.innerHTML = `<h3>Cómo actuar</h3><ul>${items}</ul>${note ? `<div class="note">${note}</div>` : ""}`;
  toastOverlay.hidden = false;
}

function closeToast() {
  if (toastOverlay) toastOverlay.hidden = true;
}

// -----------------------------------
// Emergencias
// -----------------------------------
function renderEmergencies() {
  if (!emGrid) return;
  emGrid.innerHTML = "";
  emergencies.forEach((e) => {
    const btn = document.createElement("button");
    btn.className = "emBtn";
    btn.type = "button";
    btn.innerHTML = `
      <div class="emIcon" aria-hidden="true">${e.icon}</div>
      <div>
        <div class="emName">${e.name}</div>
        <div class="emDesc">${e.desc}</div>
      </div>
    `;
    btn.addEventListener("click", () => {
      openToastText(`${e.icon} ${e.name}`, e.desc, e.bullets, e.note || "");
    });
    emGrid.appendChild(btn);
  });
}

// -----------------------------------
// Información / simulacro / mapas
// -----------------------------------
function openSimulacro() {
  openToastText(
    "🎓 Modo Simulacro",
    "Práctica de evacuación",
    [
      "Escucha la alarma o indicación del docente.",
      "Evacúa por las rutas señalizadas.",
      "Camina en fila india, sin correr.",
      "Dirígete al punto de encuentro.",
      "Permanece hasta nueva instrucción."
    ]
  );
}

function openMapaGeneral() {
  openViewerAsImage("./assets/mapa_emplazamiento.png", "🗺 Mapa general de la sede", "Ubicación general de sede y subsedes.");
}

// -----------------------------------
// Formularios
// -----------------------------------
function handleReportForm(e) {
  e.preventDefault();
  const fd = new FormData(reportForm);
  const tipo = fd.get("tipo") || "";
  const ubicacion = fd.get("ubicacion") || "";
  const detalle = fd.get("detalle") || "";
  const foto = fd.get("foto");
  const tieneFoto = foto && foto.name ? `Sí (${foto.name})` : "No";

  if (FORM_LINKS.report) {
    window.open(FORM_LINKS.report, "_blank", "noopener");
    return;
  }

  const body = [
    "Se reporta una emergencia desde la app.",
    "",
    `Tipo: ${tipo}`,
    `Ubicación: ${ubicacion}`,
    `Detalle: ${detalle}`,
    `Foto seleccionada: ${tieneFoto}`,
    "",
    "Si deseas adjuntar la foto, agrégala manualmente en el correo que se abrirá.",
    "",
    "Emergencia real: si hay riesgo vital, avisa a personal de la sede y llama a SAMU 131."
  ].join("\n");

  alert("Se abrirá tu correo para enviar el reporte.");
  window.location.href = buildMailto(EMAILS, "Reporte de emergencia - App INACAP Calama", body);
}

function handleSafeForm(e) {
  e.preventDefault();
  const fd = new FormData(safeForm);
  const ubicacion = fd.get("ubicacion") || "";
  const estado = fd.get("estado") || "";
  const comentario = fd.get("comentario") || "";

  if (FORM_LINKS.state) {
    window.open(FORM_LINKS.state, "_blank", "noopener");
    return;
  }

  const body = [
    "Confirmación de estado desde la app.",
    "",
    `Ubicación: ${ubicacion}`,
    `Estado: ${estado}`,
    `Comentario: ${comentario}`
  ].join("\n");

  alert("Se abrirá tu correo para enviar la confirmación.");
  window.location.href = buildMailto(EMAILS, "Estado del estudiante - App INACAP Calama", body);
}

// -----------------------------------
// Alerta simple desde alerta.json
// -----------------------------------
async function loadStaticAlert() {
  try {
    const res = await fetch(ALERT_JSON_URL, { cache: "no-store" });
    if (!res.ok) return;
    const data = await res.json();
    if (data && data.active) {
      alertTitle.textContent = `🚨 ${data.title || "Alerta"}`;
      alertMsg.textContent = data.message || "";
      alertBar.hidden = false;
    } else {
      alertBar.hidden = true;
    }
  } catch (err) {
    alertBar.hidden = true;
  }
}

// -----------------------------------
// Modo emergencia real v1 (local)
// -----------------------------------
function getRealEmergencyState() {
  try {
    const raw = localStorage.getItem(EMERGENCY_STORAGE_KEY);
    return raw ? JSON.parse(raw) : { active: false };
  } catch (e) {
    return { active: false };
  }
}

function setRealEmergencyState(data) {
  localStorage.setItem(EMERGENCY_STORAGE_KEY, JSON.stringify(data));
  renderRealEmergencyState();
}

function clearRealEmergencyState() {
  localStorage.removeItem(EMERGENCY_STORAGE_KEY);
  renderRealEmergencyState();
}

function vibrateEmergency() {
  try {
    if (navigator.vibrate) navigator.vibrate([500, 300, 500, 300, 500]);
  } catch (e) {}
}

function renderRealEmergencyState() {
  if (!realEmergencyOverlay) return;
  const state = getRealEmergencyState();
  if (!state.active) {
    realEmergencyOverlay.hidden = true;
    return;
  }
  realEmergencyType.textContent = state.type || "Emergencia";
  realEmergencyLocation.textContent = state.location ? `Ubicación: ${state.location}` : "";
  realEmergencyMessage.textContent = state.message || "";
  realEmergencyOverlay.hidden = false;
  vibrateEmergency();
}

// -----------------------------------
// Panel coordinador
// -----------------------------------
function openCoordinatorLogin() {
  if (!coordinatorLoginModal) return;
  coordinatorLoginModal.hidden = false;
  coordLoginStatus.textContent = "";
}

function closeCoordinatorLogin() {
  if (!coordinatorLoginModal) return;
  coordinatorLoginModal.hidden = true;
}

function openCoordinatorPanel() {
  if (!coordinatorPanelModal) return;
  coordinatorPanelModal.hidden = false;
  coordPanelStatus.textContent = "";
}

function closeCoordinatorPanel() {
  if (!coordinatorPanelModal) return;
  coordinatorPanelModal.hidden = true;
}

const allowedUsers = {
  prevencion: "Inacal",
  jefe_emergencia: "Inacal",
  encargado_emergencia: "Inacal",
  vicerrector: "Inacal"
};

function coordinatorLogin() {
  const user = coordUser?.value || "";
  const pass = coordPass?.value || "";
  if (!user || !pass) {
    coordLoginStatus.textContent = "⚠️ Completa usuario y contraseña.";
    return;
  }
  if (allowedUsers[user] !== pass) {
    coordLoginStatus.textContent = "❌ Acceso no autorizado.";
    return;
  }
  closeCoordinatorLogin();
  openCoordinatorPanel();
}

function activateEmergency() {
  const baseType = coordEmergencyType?.value || "";
  const customType = (coordEmergencyOther?.value || "").trim();
  const type = baseType === "Otro" ? customType : baseType;
  const location = coordEmergencyLocation?.value || "";
  const message = (coordEmergencyMessage?.value || "").trim();

  if (!type) {
    coordPanelStatus.textContent = "⚠️ Define el tipo de emergencia.";
    return;
  }
  if (!message) {
    coordPanelStatus.textContent = "⚠️ Escribe un mensaje institucional.";
    return;
  }

  setRealEmergencyState({
    active: true,
    type,
    location,
    message,
    updatedAt: Date.now()
  });
  coordPanelStatus.textContent = "✅ Emergencia activada en este dispositivo.";
}

function finishEmergency() {
  clearRealEmergencyState();
  coordPanelStatus.textContent = "✅ Emergencia finalizada.";
}

// 5 toques en botón info
let tapCount = 0;
let tapTimer = null;
function registerHiddenTap() {
  tapCount += 1;
  if (tapTimer) clearTimeout(tapTimer);
  tapTimer = setTimeout(() => { tapCount = 0; }, 3000);
  if (tapCount >= 5) {
    tapCount = 0;
    openCoordinatorLogin();
  }
}

// -----------------------------------
// Inicio
// -----------------------------------
document.addEventListener("DOMContentLoaded", () => {
  // Restaurar selección
  const savedSite = localStorage.getItem("pe_site");
  const savedFloor = localStorage.getItem("pe_floor");
  if (savedSite && siteSelect) siteSelect.value = savedSite;
  if (savedFloor && floorSelect) floorSelect.value = savedFloor;

  syncUI();
  renderEmergencies();
  renderRealEmergencyState();
  loadStaticAlert();

  // Eventos base
  siteSelect?.addEventListener("change", syncUI);
  floorSelect?.addEventListener("change", syncUI);

  btnPlano?.addEventListener("click", () => {
    openViewerAsImage(`./assets/planos/${planKey()}.png`, planTitle(), "Desliza para ver detalles.");
  });

  btnMiPlano?.addEventListener("click", () => btnPlano?.click());
  btnMapa?.addEventListener("click", openMapaGeneral);
  $("btnMapaGeneral")?.addEventListener("click", openMapaGeneral);

  btnEmergencia?.addEventListener("click", () => {
    $("emSection")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  $("btnSimulacro")?.addEventListener("click", openSimulacro);

  btnClose?.addEventListener("click", closeViewer);
  btnToastClose?.addEventListener("click", closeToast);
  toastOverlay?.addEventListener("click", (e) => {
    if (e.target === toastOverlay) closeToast();
  });

  btnZoomIn?.addEventListener("click", () => {
    const img = $("viewerImg");
    if (!img) return;
    zoom = Math.min(3, +(zoom + 0.25).toFixed(2));
    img.style.transform = `scale(${zoom})`;
  });

  btnZoomOut?.addEventListener("click", () => {
    const img = $("viewerImg");
    if (!img) return;
    zoom = Math.max(1, +(zoom - 0.25).toFixed(2));
    img.style.transform = `scale(${zoom})`;
  });

  btnInfo?.addEventListener("click", () => {
    registerHiddenTap();
    if (tapCount > 0 && tapCount < 5) infoDialog?.showModal();
  });

  btnInfoClose?.addEventListener("click", () => infoDialog?.close());
  btnOk?.addEventListener("click", () => infoDialog?.close());

  btnAlertClose?.addEventListener("click", () => {
    alertBar.hidden = true;
  });

  // Formularios visibles
  reportForm?.addEventListener("submit", handleReportForm);
  safeForm?.addEventListener("submit", handleSafeForm);

  // Botones overlay emergencia real
  btnStudentReport?.addEventListener("click", () => {
    reportForm?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  btnStudentSafe?.addEventListener("click", () => {
    const select = safeForm?.querySelector('select[name="estado"]');
    if (select) select.value = "Estoy en zona segura";
    safeForm?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  btnStudentHelp?.addEventListener("click", () => {
    const select = safeForm?.querySelector('select[name="estado"]');
    if (select) select.value = "Necesito ayuda";
    safeForm?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  // Coordinador
  btnCoordLoginClose?.addEventListener("click", closeCoordinatorLogin);
  coordinatorLoginModal?.addEventListener("click", (e) => {
    if (e.target === coordinatorLoginModal) closeCoordinatorLogin();
  });
  btnCoordLogin?.addEventListener("click", coordinatorLogin);

  btnCoordPanelClose?.addEventListener("click", closeCoordinatorPanel);
  coordinatorPanelModal?.addEventListener("click", (e) => {
    if (e.target === coordinatorPanelModal) closeCoordinatorPanel();
  });

  coordEmergencyType?.addEventListener("change", () => {
    coordOtherWrap.hidden = coordEmergencyType.value !== "Otro";
  });

  btnActivateEmergency?.addEventListener("click", activateEmergency);
  btnFinishEmergency?.addEventListener("click", finishEmergency);
});
