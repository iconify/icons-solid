import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ghbiblbiq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h7v7h-7Zm10 0h7v7h-7Zm-10 10h7v7h-7Zm12 7h.01M14.5 16a3.5 3.5 0 0 1 3.5 3.5m-3.5-7a7 7 0 0 1 7 7");
}
</style><path class="ghbiblbiq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:catalog-feed"} {...others} />);
}

export default Component;
