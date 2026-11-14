import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.elixa78at {
  d: path("M9.5 6h5A3.5 3.5 0 0 1 18 9.5v4a3.5 3.5 0 0 1-3.5 3.5h-5A3.5 3.5 0 0 1 6 13.5v-4A3.5 3.5 0 0 1 9.5 6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sfpr_2uud {
  d: path("M3 14V5a2 2 0 0 1 2-2h10m0 17.25h6");
}
</style><g class="hntgybcog"><path class="elixa78at"/><path class="sfpr_2uud"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:data-dedupe"} {...others} />);
}

export default Component;
