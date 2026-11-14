import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q-f5k5bhc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 13.5h10.5c2 0 3-6.5 5.25-7c1.5-.25 2.25.75 2.25 2c0 3.5-2 8.5-5 8.5H4.5A1.5 1.5 0 0 1 3 15.5ZM5 17v2.5M16 17v2.5");
}
</style><path class="q-f5k5bhc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:chaise-lounge"} {...others} />);
}

export default Component;
