import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bkl9_ycbd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8.5v7m4-7v7m-4-3.5h4M9 8.5h1a3.5 3.5 0 0 1 0 7H9Zm7 7v-7h2.75a2 2 0 0 1 0 4H16m2.75 0l2.25 3");
}
</style><path class="bkl9_ycbd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:hdr"} {...others} />);
}

export default Component;
