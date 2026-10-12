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

.s_iuhjb-d {
  width: 3.25px;
  height: 11px;
  x: 16.13px;
  y: 9.25px;
  rx: 1px;
}

.sqimcyupq {
  width: 3.25px;
  height: 15.5px;
  x: 10.38px;
  y: 4.75px;
  rx: 1px;
}

.zs3p91b8w {
  width: 3.25px;
  height: 7.5px;
  x: 4.63px;
  y: 12.75px;
  rx: 1px;
}
</style><g class="hntgybcog"><rect class="zs3p91b8w"/><rect class="sqimcyupq"/><rect class="s_iuhjb-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:chart-histogram"} {...others} />);
}

export default Component;
