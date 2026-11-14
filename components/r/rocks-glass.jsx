import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fnp1yvbqz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.89 7h10.22a1.75 1.75 0 0 1 1.745 1.884l-.731 9.5A1.75 1.75 0 0 1 16.379 20H7.621a1.75 1.75 0 0 1-1.745-1.616l-.731-9.5A1.75 1.75 0 0 1 6.89 7M5.75 17h12.5");
}
</style><path class="fnp1yvbqz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:rocks-glass"} {...others} />);
}

export default Component;
