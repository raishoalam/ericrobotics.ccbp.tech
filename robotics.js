// Simulated data for demonstration
const data = {
    batteryLevel: 75,
    operationalStatus: "Active",
    activityLog: [
        "Started operation at 9:00 AM",
        "Completed task #1 at 9:30 AM",
        "Battery level dropped to 50%",
        "Charging started at 10:00 AM",
        "Charging completed at 11:00 AM"
    ]
};

// Function to update the dashboard with real-time data
function updateDashboard() {
    document.getElementById("battery-value").textContent = data.batteryLevel;
    document.getElementById("status-value").textContent = data.operationalStatus;

    const activityLogElement = document.getElementById("activity-log");
    activityLogElement.innerHTML = ""; // Clear previous activity log

    data.activityLog.forEach(activity => {
        const li = document.createElement("li");
        li.textContent = activity;
        activityLogElement.appendChild(li);
    });
}

// Initial update of dashboard
updateDashboard();

// Simulating real-time updates every 5 seconds
setInterval(updateDashboard, 5000);