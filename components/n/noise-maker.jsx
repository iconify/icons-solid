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

.v-5tkmrwz {
  d: path("M5.75 12h7.5m.92-1.59l6.41-3.32q.67-.34.67.41v9q0 .75-.67.41l-6.41-3.32q-.67-.34-.67-1.09v-1q0-.75.67-1.09m3.33-.66v4.5");
}

.x3p4g867n {
  width: 3px;
  height: 3.5px;
  x: 2.75px;
  y: 10.25px;
  rx: 1px;
}
</style><g class="hntgybcog"><rect class="x3p4g867n"/><path class="v-5tkmrwz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:noise-maker"} {...others} />);
}

export default Component;
