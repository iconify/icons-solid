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

.k_6zgbcxh {
  d: path("M13.5 2.5V6A1.5 1.5 0 0 0 15 7.5h3.5m-10 10.75H15");
}

.xr0g06bmm {
  d: path("M18.5 10V7.5l-5-5h-6A2.5 2.5 0 0 0 5 5v7l3.75-2.25l3.25 2L15.5 9ZM5 15.5l3.75-2.25l3.25 2l3.5-2.75l3 1V19a2.5 2.5 0 0 1-2.5 2.5H7.5A2.5 2.5 0 0 1 5 19Z");
}
</style><g class="hntgybcog"><path class="xr0g06bmm"/><path class="k_6zgbcxh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:breach-of-contract"} {...others} />);
}

export default Component;
