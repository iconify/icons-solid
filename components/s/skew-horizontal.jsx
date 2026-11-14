import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g4weej29w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.23 8h8.78a1.75 1.75 0 0 1 1.647 2.343l-3.24 9A1.75 1.75 0 0 1 14.77 20.5H5.99a1.75 1.75 0 0 1-1.647-2.343l3.24-9A1.75 1.75 0 0 1 9.23 8M9 3.5h8.5M16 2l1.5 1.5L16 5");
}
</style><path class="g4weej29w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:skew-horizontal"} {...others} />);
}

export default Component;
