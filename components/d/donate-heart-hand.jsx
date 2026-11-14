import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b4moxzy1g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14h4l3.5 2.5h5l4-3a1.75 1.75 0 0 1 2.25 2.75L16.5 21h-14Zm9.5-1.5L7.5 8A3 3 0 0 1 12 4.25A3 3 0 0 1 16.5 8ZM5.5 14v7");
}
</style><path class="b4moxzy1g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:donate-heart-hand"} {...others} />);
}

export default Component;
