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

.tl0x8xoaa {
  width: 18.5px;
  height: 12.5px;
  x: 2.75px;
  y: 8.75px;
  rx: 2.5px;
}

.tmb8mnb2y {
  d: path("M7 8.75v-5.5m5 5.5v-5.5m5 5.5v-5.5m-11.5 2h3m2 0h3m2 0h3m-5.5 6.5L10.75 15h3l-2.25 3.25");
}
</style><g class="hntgybcog"><rect class="tl0x8xoaa"/><path class="tmb8mnb2y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:substation"} {...others} />);
}

export default Component;
