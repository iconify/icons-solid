import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.goemexbyl {
  d: path("M7.75 12h8.5M9.5 18v2.5m5-2.5v2.5");
}

.h6mxz8bbi {
  d: path("M3.5 21.25v-10a8.5 8.5 0 0 1 17 0v10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lr7wd2l_y {
  width: 8.5px;
  height: 9.5px;
  x: 7.75px;
  y: 8.5px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><path class="h6mxz8bbi"/><rect class="lr7wd2l_y"/><path class="goemexbyl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:subway"} {...others} />);
}

export default Component;
