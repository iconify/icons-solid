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

.vijr9ibmd {
  width: 15.5px;
  height: 17.5px;
  x: 4.25px;
  y: 3.75px;
  rx: 1.5px;
}

.xd-vp3ztb {
  d: path("M9 3.75v3h6v-3M9 10v7.5m3-7.5v7.5m3-7.5v7.5m-8-1.75l10-4.5");
}
</style><g class="hntgybcog"><rect class="vijr9ibmd"/><path class="xd-vp3ztb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:inventory-count"} {...others} />);
}

export default Component;
