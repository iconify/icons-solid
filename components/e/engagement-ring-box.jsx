import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h0lz3lmyg {
  d: path("M9.5 11a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m1.914-4.5h1.172a.586.586 0 0 1 .414 1a1.414 1.414 0 0 1-2 0a.586.586 0 0 1 .414-1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lsj0mccvv {
  d: path("M5.625 13.5h12.75A2.625 2.625 0 0 1 21 16.125v2.25A2.625 2.625 0 0 1 18.375 21H5.625A2.625 2.625 0 0 1 3 18.375v-2.25A2.625 2.625 0 0 1 5.625 13.5M4 13.5L5 3h14l1 10.5");
}
</style><g class="hntgybcog"><path class="lsj0mccvv"/><path class="h0lz3lmyg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:engagement-ring-box"} {...others} />);
}

export default Component;
