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

.mqz1-qshz {
  d: path("M3 3.5q9 7 18 0");
}

.y-9p-yb6a {
  d: path("M8.5 6.5L6 18.5h12l-2.5-12m-5.25 12a1.75 1.75 0 0 0 3.5 0");
}
</style><g class="hntgybcog"><path class="mqz1-qshz"/><path class="y-9p-yb6a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cowbell"} {...others} />);
}

export default Component;
