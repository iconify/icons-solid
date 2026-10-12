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

.oa__7ybdd {
  d: path("M5.25 6.5h13.5q2.5 0 2.5 2.5v6q0 2.5-2.5 2.5H11q-2.5 0-4.39-1.64l-1.97-1.72Q2.75 12.5 2.75 10V9q0-2.5 2.5-2.5");
}

.ro9z7dnyy {
  d: path("M9.75 9v6");
}

.usfgl2baw {
  width: 5.75px;
  height: 6px;
  x: 13px;
  y: 9px;
  rx: 1.25px;
}
</style><g class="hntgybcog"><path class="oa__7ybdd"/><rect class="usfgl2baw"/><path class="ro9z7dnyy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:taillight"} {...others} />);
}

export default Component;
