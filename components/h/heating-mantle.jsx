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

.i3x23cctd {
  d: path("M3 12.5a9 9 0 0 0 18 0");
}

.symzxcowd {
  d: path("M10.5 2.5v6a5.25 5.25 0 1 0 3 0v-6");
}
</style><g class="hntgybcog"><path class="symzxcowd"/><path class="i3x23cctd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:heating-mantle"} {...others} />);
}

export default Component;
