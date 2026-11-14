import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xaxr0cc_a {
  d: path("M2.5 5.5h19c0 6.5-4 11-9.5 11S2.5 12 2.5 5.5m6 13.75h7");
}

.y7cl5n_xv {
  d: path("M6 9q3-1.5 6 0t6 0");
}
</style><g class="hntgybcog"><path class="xaxr0cc_a"/><path class="y7cl5n_xv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:matcha-bowl"} {...others} />);
}

export default Component;
