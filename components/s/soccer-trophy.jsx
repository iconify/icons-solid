import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fchwrcait {
  d: path("M7 3.5h10V9A5 5 0 0 1 7 9ZM12 14v3.5m-2.25 0h4.5A1.75 1.75 0 0 1 16 19.25A1.75 1.75 0 0 1 14.25 21h-4.5A1.75 1.75 0 0 1 8 19.25a1.75 1.75 0 0 1 1.75-1.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yb_llpbyl {
  d: path("M7 5H4.5c0 4 1.5 5.5 3.25 6.5M17 5h2.5c0 4-1.5 5.5-3.25 6.5");
}
</style><g class="hntgybcog"><path class="fchwrcait"/><path class="yb_llpbyl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:soccer-trophy"} {...others} />);
}

export default Component;
