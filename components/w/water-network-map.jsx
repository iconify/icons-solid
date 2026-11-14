import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lshzu8f3a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 2.5s-2.75 3.25-2.75 5a2.75 2.75 0 0 0 5.5 0c0-1.75-2.75-5-2.75-5m2.75 5h6.25m-9 2.75v5.25m2-6.25l7.75 7M15.5 7.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M4 18a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m11.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}
</style><path class="lshzu8f3a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:water-network-map"} {...others} />);
}

export default Component;
