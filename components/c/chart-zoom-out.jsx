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

.t6gn3nzwz {
  d: path("M3.5 12.5a6 6 0 1 0 12 0a6 6 0 1 0-12 0m10.25 4.25L18 21M16.5 5.5h5");
}

.zuw_o9_eu {
  d: path("m6.5 14.5l2-3l2 1.5l2-3");
}
</style><g class="hntgybcog"><path class="t6gn3nzwz"/><path class="zuw_o9_eu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:chart-zoom-out"} {...others} />);
}

export default Component;
