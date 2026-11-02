import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cz7l42nhx {
  stroke-opacity: 0.4;
  d: path("M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.slpm0qbcm {
  d: path("M8 4c5 6 7 10 8 16M4 11c4.5 0 9-1 14-5M7 19c3-3 6-6 13-7");
}
</style><g class="nrj6p8qat"><path class="cz7l42nhx"/><path class="slpm0qbcm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:dribbble-duocolor-sharp"} {...others} />);
}

export default Component;
