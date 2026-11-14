import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dgo-i_bol {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 2.5V19m-2.5 0h3.8M5.25 5.5h11.5M8 13L5.25 5.5L2.5 13A2.75 2.75 0 0 0 8 13m11.087-1.127L16.75 5.5L14 13q0 .332.079.654t.232.617M15 21c0-4.5 2-6.5 6.5-6.5c0 4.5-2 6.5-6.5 6.5m-1 1l4-4");
}
</style><path class="dgo-i_bol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:environmental-law"} {...others} />);
}

export default Component;
