import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
  "10:00 PM"
];

export default function Calendar() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Meeting with client",
      start: "9:00 AM",
      end: "10:00 AM"
    },
    {
      id: 2,
      title: "Lunch break",
      start: "12:00 PM",
      end: "1:00 PM"
    },
    {
      id: 3,
      title: "Team meeting",
      start: "2:00 PM",
      end: "3:00 PM"
    }
  ]);

  const getStartIndex = (time) => {
    return timeSlots.indexOf(time);
  };

  const getEndIndex = (time) => {
    return timeSlots.indexOf(time) - 1;
  };

  const renderEvent = (event) => {
    const startIndex = getStartIndex(event.start);
    const endIndex = getEndIndex(event.end);
    const eventStyle = {
      top: startIndex * 60,
      height: (endIndex - startIndex + 1) * 60
    };
    return (
      <View key={event.id} style={[styles.event, eventStyle]}>
        <Text style={styles.eventTitle}>{event.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.timeSlots}>
        {timeSlots.map((time) => (
          <View key={time} style={styles.timeSlot}>
            <Text style={styles.timeText}>{time}</Text>
          </View>
        ))}
      </View>
      <View style={styles.events}>{events.map(renderEvent)}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  timeSlots: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: "#ccc"
  },
  timeSlot: {
    height: 60,
    justifyContent: "center",
    alignItems: "center"
  },
  timeText: {
    fontSize: 12
  },
  events: {
    flex: 5
  },
  event: {
    position: "absolute",
    left: 0,
    right: 0,
    backgroundColor: "#f0f0f0",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
    margin: 10
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: "bold"
  }
});
