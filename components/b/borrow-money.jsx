import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eoih8kb2u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.5 6l3.772-2.095a1.5 1.5 0 0 1 1.456 0L16.5 6a1.334 1.334 0 0 1-.648 2.5H8.148A1.334 1.334 0 0 1 7.5 6M3 19.5h10.8m-8.3-8v5m4-5v5m4-5v5m5.5-2.25v7m-2.5-2.5l2.5 2.5l2.5-2.5");
}
</style><path class="eoih8kb2u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:borrow-money"} {...others} />);
}

export default Component;
