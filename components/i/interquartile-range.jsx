import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x-34j7lkl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 7h6.5A1.75 1.75 0 0 1 17 8.75v6.5A1.75 1.75 0 0 1 15.25 17h-6.5A1.75 1.75 0 0 1 7 15.25v-6.5A1.75 1.75 0 0 1 8.75 7m2.5 0v10M2.5 12H7m10 0h4.5m-19-2.5v5m19-5v5");
}
</style><path class="x-34j7lkl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:interquartile-range"} {...others} />);
}

export default Component;
