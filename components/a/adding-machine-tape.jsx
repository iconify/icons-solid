import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zlovs0b-m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 2.5h13v16l-3.25 2.75L12 18.5l-3.25 2.75L5.5 18.5Zm3 4.5h3M10 5.5v3M13.5 7h2m-7 4.5h7m-7 4H13");
}
</style><path class="zlovs0b-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:adding-machine-tape"} {...others} />);
}

export default Component;
