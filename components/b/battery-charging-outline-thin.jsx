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

.kjj2pe0fr {
  d: path("m11 9 -3 3h3l-3 3");
}

.mqh2f6n-y {
  d: path("M2 9a2 2 0 0 1 2 -2h11a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.om2raabrv {
  d: path("M20 10v4");
}
</style><g class="hntgybcog"><path class="mqh2f6n-y"/><path class="om2raabrv"/><path class="kjj2pe0fr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:battery-charging-outline-thin"} {...others} />);
}

export default Component;
