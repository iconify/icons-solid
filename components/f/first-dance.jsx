import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l2yxmsz7e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 8a2.25 2.25 0 1 0 4.5 0A2.25 2.25 0 1 0 6 8Zm7.5 0A2.25 2.25 0 1 0 18 8a2.25 2.25 0 1 0-4.5 0ZM3 20.5c0-4 2.5-7 6-7c2 0 3 1.5 3 3.5m0 0c0-.766.147-1.459.44-2.022M18 21.25l-2.75-3C14.25 17 15 15 16.5 15c.75 0 1.25.5 1.5 1c.25-.5.75-1 1.5-1c1.5 0 2.25 2 1.25 3.25Z");
}
</style><path class="l2yxmsz7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:first-dance"} {...others} />);
}

export default Component;
