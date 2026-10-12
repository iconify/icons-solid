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

.jycbepbmn {
  d: path("M5.25 13.5C5.5 8.5 10 5.75 17 6");
}

.khbna04ud {
  cx: 19px;
  cy: 6px;
  r: 2px;
}

.vtgxb2boi {
  width: 5px;
  height: 7.75px;
  x: 2.75px;
  y: 13.5px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><rect class="vtgxb2boi"/><path class="jycbepbmn"/><circle class="khbna04ud"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:endoscope"} {...others} />);
}

export default Component;
