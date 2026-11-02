import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hiyfnwbgc {
  stroke-opacity: 0.4;
  d: path("M10 11v8a2 2 0 1 0 4 0v-8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.w-mn8bmrv {
  d: path("M4 11a8 8 0 1 1 16 0Z");
}
</style><g class="nrj6p8qat"><path class="hiyfnwbgc"/><path class="w-mn8bmrv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:mushroom-duocolor-round"} {...others} />);
}

export default Component;
