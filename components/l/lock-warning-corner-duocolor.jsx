import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ns2fljdev {
  d: path("M11 21H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2M8 9V7a4 4 0 1 1 8 0v2");
}

.phl1oub2d {
  stroke-opacity: 0.4;
  d: path("M18 15v3m0 3h.01");
}
</style><g class="nrj6p8qat"><path class="phl1oub2d"/><path class="ns2fljdev"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:lock-warning-corner-duocolor"} {...others} />);
}

export default Component;
