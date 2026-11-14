import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f577_2brm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10.75 21.5l-1.25-3c-2.5-.5-4.25-2-5.25-3.75c-1.5-3.25 0-6.5 3-8c3-1.25 6-.5 7.5 2.25L17 11c.25.5.25 1-.25 1.25l-.5.25L17 14c.25.75 0 1.75-1 2.25l-1.25.5l1 2.25M20.5 2.5V8m-1.75-1.75L20.5 8L22 6.25");
}
</style><path class="f577_2brm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:fainting"} {...others} />);
}

export default Component;
