import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q3xyv5cpi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16 8c2 2 3 4 2.5 5.5L7 20.5c-3 1-4 0-3.5-3.5l7-11.5C11.5 5 14 6 16 8Zm0 0l3.5-3.5M16 8l5-1");
}
</style><path class="q3xyv5cpi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:carrot"} {...others} />);
}

export default Component;
