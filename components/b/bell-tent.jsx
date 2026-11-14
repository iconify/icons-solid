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

.opi6knb3w {
  d: path("m8.5 20.5l3.5-7l3.5 7");
}

.pb_9jfgem {
  d: path("M3 20.5V16q1.5-5 9-12q7.5 7 9 12v4.5Zm9-18v11");
}
</style><g class="hntgybcog"><path class="pb_9jfgem"/><path class="opi6knb3w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bell-tent"} {...others} />);
}

export default Component;
