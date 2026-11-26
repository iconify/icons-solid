import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b6sjhpb8g {
  d: path("M12 6L12 18M9 9L12 6L15 9M9 15L12 18L15 15");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.y82nvdjsb {
  stroke-opacity: 0.4;
  d: path("M5 2L19 2M5 22L19 22");
}
</style><g class="nrj6p8qat"><path class="y82nvdjsb"/><path class="b6sjhpb8g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:expand-vertical-duotone"} {...others} />);
}

export default Component;
