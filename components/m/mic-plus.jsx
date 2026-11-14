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

.o911x5vpn {
  d: path("M2.5 11a6.5 6.5 0 0 0 13 0M9 17.5v4M18.5 3v6m-3-3h6");
}

.xtoooibyp {
  d: path("M9 2.5za3 3 0 0 1 3 3V11a3 3 0 0 1-3 3a3 3 0 0 1-3-3V5.5a3 3 0 0 1 3-3");
}
</style><g class="hntgybcog"><path class="xtoooibyp"/><path class="o911x5vpn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:mic-plus"} {...others} />);
}

export default Component;
