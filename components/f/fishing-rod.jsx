import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dzgxb4byu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 20.5l14-17m-11 14a2 2 0 1 0 4 0a2 2 0 1 0-4 0m11-14c2 2.5 3 6.5 3 11m0 0V17a1.5 1.5 0 0 1-3 0");
}
</style><path class="dzgxb4byu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:fishing-rod"} {...others} />);
}

export default Component;
