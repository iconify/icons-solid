import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vjjufrban {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 10.25L4 13a3.5 3.5 0 0 0 5 5l2.75-2.75m3.5-3.5L18 9a3.5 3.5 0 0 0-5-5l-2.75 2.75m-2.5 7.5l6.5-6.5M21 21l-5.25-5.25m0 4v-4h4");
}
</style><path class="vjjufrban"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:backlink"} {...others} />);
}

export default Component;
