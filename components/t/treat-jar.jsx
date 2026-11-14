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

.k_hgwdbxb {
  d: path("M5.5 2.75h13a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2a2 2 0 0 1 2-2m-1 4V18.5A2.5 2.5 0 0 0 7 21h10a2.5 2.5 0 0 0 2.5-2.5V6.75");
}

.se5p2bbbu {
  d: path("M9.75 13.25h4.5a1.25 1.25 0 1 1 2 0q-.75.75 0 1.5a1.25 1.25 0 1 1-2 0h-4.5a1.25 1.25 0 1 1-2 0q.75-.75 0-1.5a1.25 1.25 0 1 1 2 0");
}
</style><g class="hntgybcog"><path class="k_hgwdbxb"/><path class="se5p2bbbu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:treat-jar"} {...others} />);
}

export default Component;
