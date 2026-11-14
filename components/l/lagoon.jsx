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

.om54-ta-b {
  d: path("M12 12.75Q11.5 8.5 13.5 5m0 0q-3.5-3-7 1m7-1Q18 2.5 20 7");
}

.w7jsxzbrs {
  d: path("M7.5 14.5q4.5-3.5 9 0M3 17.75q2.25-1 4.5 0t4.5 0t4.5 0t4.5 0m-15.5 3.5q2.25-1 4.5 0t4.5 0t4.5 0");
}
</style><g class="hntgybcog"><path class="om54-ta-b"/><path class="w7jsxzbrs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:lagoon"} {...others} />);
}

export default Component;
