import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ncrpcqudc {
  d: path("M10 21c-3-2-7-6-7-11a7 7 0 0 1 13.982-.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wnaq2lf2m {
  stroke-opacity: 0.4;
  d: path("M8 9a2 2 0 1 0 4 0a2 2 0 0 0-4 0m6 12v-3l4-4l3 3l-4 4Z");
}
</style><g class="nrj6p8qat"><path class="wnaq2lf2m"/><path class="ncrpcqudc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:map-pin-edit-corner-duocolor"} {...others} />);
}

export default Component;
