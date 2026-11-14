import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j-2pngb3s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.002 20.5H3.5c0-4 2.5-6 5-6c1.777 0 3.555 1.011 4.434 3.033M8.5 14.5L13 3m1.75 17h6.5c-1-1-1-1.75-1-2.75a2.25 2.25 0 0 0-4.5 0c0 1 0 1.75-1 2.75m2.5 1.75h1.5");
}
</style><path class="j-2pngb3s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:plumber-call"} {...others} />);
}

export default Component;
