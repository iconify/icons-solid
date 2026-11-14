import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ed2ek-bth {
  d: path("M3 10.5a9 5.5 0 1 0 18 0a9 5.5 0 1 0-18 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k4-_0owka {
  d: path("M8.5 10.5a3.5 2 0 1 0 7 0a3.5 2 0 1 0-7 0");
}

.yev75xqlb {
  d: path("M3 10.5V13a9 5.5 0 0 0 18 0v-2.5");
}
</style><g class="hntgybcog"><path class="ed2ek-bth"/><path class="yev75xqlb"/><path class="k4-_0owka"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:flat-washer"} {...others} />);
}

export default Component;
