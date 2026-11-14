import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qoovwr9cl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 21.5v-11m0 0c-2.25-2-2.25-5.5 0-8c2.25 2.5 2.25 6 0 8ZM9 14c-2 1.5-5.5.5-6.5-3c3-1 5.75.5 6.5 3Zm7.708-1.306A5.7 5.7 0 0 0 17.5 11c-3-1-5.75.5-6.5 3c.435.326.941.534 1.476.624m3.024.876l5 5m0-5l-5 5");
}
</style><path class="qoovwr9cl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:poison-ivy"} {...others} />);
}

export default Component;
