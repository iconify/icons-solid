import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.amexypb1j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 3v16m2.057-15.177l1.961.784a1.5 1.5 0 0 1 0 2.786l-1.961.784A1.5 1.5 0 0 1 8.75 6.784V5.216a1.5 1.5 0 0 1 2.057-1.393M3.75 19a5 1.75 0 1 0 10 0a5 1.75 0 1 0-10 0m12-1.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}
</style><path class="amexypb1j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:charity-golf-day"} {...others} />);
}

export default Component;
