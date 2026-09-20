import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bu6goduan {
  d: path("M16 7v10h3V7Z");
}

.gcn2u0bqi {
  d: path("M21.5 10v4");
}

.hm--inbem {
  d: path("M5 7v10h3V7Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l0v-b4kbr {
  d: path("M8 12h8");
}

.swt86hbgr {
  d: path("M2.5 10v4");
}
</style><g class="hntgybcog"><path class="l0v-b4kbr"/><path class="hm--inbem"/><path class="bu6goduan"/><path class="swt86hbgr"/><path class="gcn2u0bqi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:hotel-gym-outline-thin"} {...others} />);
}

export default Component;
