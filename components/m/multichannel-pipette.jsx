import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c3oqmvbrr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 2.5h3m-1.5 0v2m-2.5 0h5V9h-5ZM3.5 9h17v3h-17Zm2 3L7 15.75L8.5 12m2 0l1.5 3.75L13.5 12m2 0l1.5 3.75L18.5 12M3 18.5v3h18v-3");
}
</style><path class="c3oqmvbrr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:multichannel-pipette"} {...others} />);
}

export default Component;
