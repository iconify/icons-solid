import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ge48eeb8i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 13.5v-8a3 3 0 0 1 6 0v8a4.5 4.5 0 1 1-6 0m3-6.5v9.75m8.5-11.25L20 8.75a2.75 2.75 0 1 1-4.5 0Z");
}
</style><path class="ge48eeb8i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:feels-like-hot"} {...others} />);
}

export default Component;
