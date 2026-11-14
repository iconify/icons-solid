import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qxaqjmt7i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h6v6h-6Zm0 11h6v6h-6Zm12-6h7v7h-7Zm-6-2h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-1m3-5.5h3");
}
</style><path class="qxaqjmt7i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:merge"} {...others} />);
}

export default Component;
