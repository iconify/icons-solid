import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rm4fnvbst {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12.5V7l3-3l3 3l3-3.75L15 7l3-3l3 3v5.5ZM9 7v5.5M15 7v5.5m-2.5 2.75h7L18 17.5h-4ZM3 20.5q2.25-1.5 4.5 0t4.5 0t4.5 0t4.5 0");
}
</style><path class="rm4fnvbst"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:canal-street"} {...others} />);
}

export default Component;
