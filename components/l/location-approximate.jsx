import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n0pnk9b7q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.65 2.644a9.5 9.5 0 0 1 6.738 4.896m1.02 3.138a9.5 9.5 0 0 1-2.574 7.921m-2.669 1.94a9.5 9.5 0 0 1-8.33 0m-2.669-1.94a9.5 9.5 0 0 1-2.574-7.921m1.02-3.138a9.5 9.5 0 0 1 6.738-4.896");
}
</style><path class="n0pnk9b7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:location-approximate"} {...others} />);
}

export default Component;
