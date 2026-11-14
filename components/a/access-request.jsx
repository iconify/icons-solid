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

.l0ps5mdmj {
  d: path("M10.25 7.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0");
}

.r7xv5tbuw {
  d: path("M15.25 12.5v9h3m-3-3.75h2.5M3.75 7.5h6.5M7.75 5l2.5 2.5l-2.5 2.5");
}
</style><g class="hntgybcog"><path class="l0ps5mdmj"/><path class="r7xv5tbuw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:access-request"} {...others} />);
}

export default Component;
