import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fm0tjs-pa {
  stroke-opacity: 0.4;
  d: path("m14 10l-4 4M9 9h.01M15 15h.01");
}

.mbp5v3bfn {
  d: path("M21 9V6H3v3a3 3 0 0 1 0 6v3h18v-3a3 3 0 0 1 0-6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="fm0tjs-pa"/><path class="mbp5v3bfn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:coupon-duocolor-sharp"} {...others} />);
}

export default Component;
