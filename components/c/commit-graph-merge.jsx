import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fc__8nbub {
  d: path("M4.75 19.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m10-9.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oe9-09b_b {
  d: path("M7 7v10m10-5.25V13c0 4-4 6.25-7.75 6.25m-4.5-14.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}
</style><g class="hntgybcog"><path class="oe9-09b_b"/><path class="fc__8nbub"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:commit-graph-merge"} {...others} />);
}

export default Component;
