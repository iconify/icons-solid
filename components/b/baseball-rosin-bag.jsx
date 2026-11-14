import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ftem1ccvk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 10C3 12 2.75 21.5 12 21.5S21 12 15.5 10m-6 0L7 3.5c2.5 1.25 7.5 1.25 10 0L14.5 10m-7 0h9");
}
</style><path class="ftem1ccvk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:baseball-rosin-bag"} {...others} />);
}

export default Component;
