import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gw-lz5rdd {
  d: path("m7.3 19.69l8.24-13.12M9.5 4.25Q19.93-.42 20.25 11Q16.2 5.51 9.5 4.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xhptglb4e {
  cx: 17px;
  cy: 17px;
  r: 3.75px;
}
</style><g class="hntgybcog"><path class="gw-lz5rdd"/><circle class="xhptglb4e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:crypto-mining"} {...others} />);
}

export default Component;
