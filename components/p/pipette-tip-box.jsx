import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fc6nm_bhe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 10h12a3.5 3.5 0 0 1 3.5 3.5v4A3.5 3.5 0 0 1 18 21H6a3.5 3.5 0 0 1-3.5-3.5v-4A3.5 3.5 0 0 1 6 10M4.5 4h3l-1 6h-1Zm6 0h3l-1 6h-1Zm6 0h3l-1 6h-1Z");
}
</style><path class="fc6nm_bhe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:pipette-tip-box"} {...others} />);
}

export default Component;
