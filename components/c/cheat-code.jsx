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

.lv4o2fbtj {
  d: path("M6.5 15.5v-7M5 10l1.5-1.5L8 10m4 5.5v-7M10.5 10L12 8.5l1.5 1.5m4-1.5v7M16 14l1.5 1.5L19 14");
}

.o2tws2j4q {
  width: 18.5px;
  height: 12px;
  x: 2.75px;
  y: 6px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="o2tws2j4q"/><path class="lv4o2fbtj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:cheat-code"} {...others} />);
}

export default Component;
