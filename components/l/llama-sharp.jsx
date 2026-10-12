import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kr3lpri8d {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 7.25v-2.5h2.25l.5-2l1 1.75h2V12h10.5v8.25h-2.5V17h-6v3.25h-2.5V15.5H8v-6H5z");
}

.njvf-ub1m {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.75 6.75h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="kr3lpri8d"/><path class="njvf-ub1m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:llama-sharp"} {...others} />);
}

export default Component;
