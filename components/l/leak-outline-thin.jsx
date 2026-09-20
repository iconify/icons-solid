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

.kgr7y94lw {
  d: path("m12 13 2.5 2.5a3 3 0 1 1 -5 0Z");
}

.mj3xlxbyp {
  d: path("M14 5v6");
}

.mqtixbwqo {
  d: path("M2 8h20");
}

.saqo5mbad {
  d: path("M10 5v6");
}
</style><g class="hntgybcog"><path class="mqtixbwqo"/><path class="saqo5mbad"/><path class="mj3xlxbyp"/><path class="kgr7y94lw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:leak-outline-thin"} {...others} />);
}

export default Component;
