import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b-b0y75-f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 20.5L12 12m4.975-4.975za2.25 2.25 0 0 1 0 3.182l-1.768 1.768a2.25 2.25 0 0 1-3.182 0a2.25 2.25 0 0 1 0-3.182l1.768-1.768a2.25 2.25 0 0 1 3.182 0M17 7c1.5-1.5 1.5-4 4-4.5");
}
</style><path class="b-b0y75-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:temperature-sensor"} {...others} />);
}

export default Component;
