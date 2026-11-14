import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f0me3hbjv {
  d: path("M10.5 15.5v3a3 3 0 0 1-3 3H3m4.75-19V6m5.5-3.5V6m6.25 8a2.5 2.5 0 1 0 2.5 2.5h-2.5Zm-1.75 4.25L14.5 21.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.olz-o_b1z {
  d: path("M4.5 6h12v3.5a6 6 0 0 1-12 0Z");
}
</style><g class="hntgybcog"><path class="olz-o_b1z"/><path class="f0me3hbjv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:charger-maintenance"} {...others} />);
}

export default Component;
