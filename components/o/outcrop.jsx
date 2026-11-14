import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h7ray43gz {
  d: path("M3.5 20L6 12.5l4-3l3-5l4.5 3L20 20M2.5 20h19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.julv8sb5z {
  d: path("m5 15.5l6-3h7.5");
}
</style><g class="hntgybcog"><path class="h7ray43gz"/><path class="julv8sb5z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:outcrop"} {...others} />);
}

export default Component;
