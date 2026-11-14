import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d3p9rbb7h {
  d: path("M3.25 5.75h2.5v2.5m6.417 1.391l1.411.869a1.75 1.75 0 0 1 0 2.98l-1.411.869A1.75 1.75 0 0 1 9.5 12.868v-1.736a1.75 1.75 0 0 1 2.667-1.491");
}

.d5cgy1yrk {
  d: path("M18.25 5.75a8.75 8.75 0 1 1-12.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="d5cgy1yrk"/><path class="d3p9rbb7h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:autoplay"} {...others} />);
}

export default Component;
