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

.k_ybw_byz {
  width: 8px;
  height: 9px;
  x: 13.25px;
  y: 4.75px;
  rx: 1.5px;
}

.pu8zxwb-d {
  width: 8px;
  height: 9px;
  x: 2.75px;
  y: 4.75px;
  rx: 1.5px;
}

.t89kf6stq {
  d: path("M6.75 13.75v5.5m-2.25 0H9m8.25-5.5v5.5m-2.25 0h4.5");
}
</style><g class="hntgybcog"><rect class="pu8zxwb-d"/><rect class="k_ybw_byz"/><path class="t89kf6stq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:monitor-dual"} {...others} />);
}

export default Component;
