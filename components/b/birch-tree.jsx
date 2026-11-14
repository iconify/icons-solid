import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.koqjhob4d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 12c-2.75 0-3-3.5-1.5-4.5c-.5-3 1.5-5 3.75-5s4.25 2 3.75 5c1.5 1 1.25 4.5-1.5 4.5Zm.5 0v9.5m3.5-9.5v9.5m-3.5-7H12m1.75 2.5H12m-1.75 2.5H12");
}
</style><path class="koqjhob4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:birch-tree"} {...others} />);
}

export default Component;
