import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.td81q50no {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M20.5 3v18m-3-14h3m-3 5h3m-3 5h3m-18 2.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m3.25-1.25L15 9.5");
}
</style><path class="td81q50no"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:mower-height-lever"} {...others} />);
}

export default Component;
