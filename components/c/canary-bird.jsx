import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mlt4qvbho {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 18.5C4 14 8 11 12.5 11c4 0 5.5 2 5.5 4.5c0 3-3 4.5-6 4.5s-6-.5-8-1.5Zm8.5-11a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm6-1.5L21 7.5L18.5 9ZM9 20v1.75M13 20v1.75M16.25 7h.01");
}
</style><path class="mlt4qvbho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:canary-bird"} {...others} />);
}

export default Component;
