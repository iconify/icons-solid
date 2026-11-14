import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m94csui7s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 15V8.5a3.5 3.5 0 0 1 7 0V15Zm2 0v5m3-5v5m5-13.5q1.5-2 3 0t3 0q1.25-1.75 2.5 0M13 12q1.5-2 3 0t3 0q1.25-1.75 2.5 0M13 17.5q1.5-2 3 0t3 0q1.25-1.75 2.5 0");
}
</style><path class="m94csui7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:infrared"} {...others} />);
}

export default Component;
