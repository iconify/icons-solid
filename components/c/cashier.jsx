import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f8bc0_qqz {
  d: path("M9.5 17.75h5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jqulhrnpy {
  width: 18.5px;
  height: 7px;
  x: 2.75px;
  y: 14.25px;
  rx: 1.5px;
}

.qqfg7qh_u {
  d: path("M5.75 14.25a6.25 4 0 0 1 12.5 0Z");
}

.wv5f_1brg {
  cx: 12px;
  cy: 5.25px;
  r: 2.5px;
}
</style><g class="hntgybcog"><circle class="wv5f_1brg"/><path class="qqfg7qh_u"/><rect class="jqulhrnpy"/><path class="f8bc0_qqz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:cashier"} {...others} />);
}

export default Component;
