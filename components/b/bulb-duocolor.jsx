import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fnzvalwps {
  stroke-opacity: 0.4;
  d: path("M9 21h6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.y_l45ibrm {
  d: path("M15 15v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1c0-1.5-3-3.5-3-6a6 6 0 1 1 12 0c0 2.5-3 4.5-3 6");
}
</style><g class="nrj6p8qat"><path class="fnzvalwps"/><path class="y_l45ibrm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:bulb-duocolor"} {...others} />);
}

export default Component;
