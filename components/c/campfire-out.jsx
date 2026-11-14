import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h2xtpxbfz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 20l9.5-3.5m-9.5 0L12 20m-4.75-6.5c-2-2.25 2-4.25 0-6.75c-1-1.25-.25-3.25 1-4.25m9.75 11c1.5 1.75 3 3.25 3 5a3 3 0 0 1-6 0c0-1.75 1.5-3.25 3-5");
}
</style><path class="h2xtpxbfz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:campfire-out"} {...others} />);
}

export default Component;
