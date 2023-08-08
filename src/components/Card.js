import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ProjectsSection from "./ProjectsSection";

const Card = ({ title, description, imageSrc }) => {
  ProjectsSection
  return (
    <VStack
      color="black"
      backgroundColor="white"
      spacing={4}
      p={0}
      borderRadius="md"
      borderColor="gray.200"
      alignItems="flex-start"
    >
      <Image
        src={imageSrc}
        alt={title}
        description={description}
        borderRadius="md"
        objectFit="cover"
        width="100%"
        height="240px"
        
      />
      <VStack spacing={3} alignItems="flex-start"
      pl={4}
      >
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text color="gray">{description}</Text>
      </VStack>
      <HStack spacing={2} alignItems="center"pl={4} >
        <Text>See more</Text>
        <FontAwesomeIcon icon={faArrowRight} />
      </HStack>
    </VStack>
  );


};

export default Card;
