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

.nue6rq1zi {
  d: path("M8.25 10c0-.75-.5-1.25-1.25-1.25s-1.25.5-1.25 1.25c0 1.75 2.5 1.75 2.5 3.75c0 .75-.5 1.5-1.25 1.5s-1.25-.75-1.25-1.5M10.5 12a1.5 3.25 0 1 0 3 0a1.5 3.25 0 1 0-3 0m7.75-2c0-.75-.5-1.25-1.25-1.25s-1.25.5-1.25 1.25c0 1.75 2.5 1.75 2.5 3.75c0 .75-.5 1.5-1.25 1.5s-1.25-.75-1.25-1.5");
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="nue6rq1zi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:sos-button"} {...others} />);
}

export default Component;
