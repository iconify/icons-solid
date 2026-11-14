import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c7x_kac-b {
  d: path("M8.125 9.5h7.75a2.625 2.625 0 0 1 2.625 2.625v3.75a2.625 2.625 0 0 1-2.625 2.625h-7.75A2.625 2.625 0 0 1 5.5 15.875v-3.75A2.625 2.625 0 0 1 8.125 9.5");
}

.civwynb_e {
  d: path("M10.25 14a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}

.hltbbtbdk {
  d: path("M2.5 21.5V8A1.5 1.5 0 0 1 4 6.5h16A1.5 1.5 0 0 1 21.5 8v13.5m-13-15v-3h7v3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="hltbbtbdk"/><path class="c7x_kac-b"/><path class="civwynb_e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:camera-cage"} {...others} />);
}

export default Component;
