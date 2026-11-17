import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g5s6ahb7t {
  d: path("M8 21H4V10l8-7l5.714 5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q3sfkwbzn {
  stroke-opacity: 0.4;
  d: path("M17 13h4v3c0 2.5-1.5 4-4 5c-2.5-1-4-2.5-4-5v-3z");
}
</style><g class="nrj6p8qat"><path class="q3sfkwbzn"/><path class="g5s6ahb7t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:house-shield-corner-duocolor-sharp"} {...others} />);
}

export default Component;
