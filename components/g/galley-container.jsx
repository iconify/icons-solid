import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fu1wyubwl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 18.5v-12A3.5 3.5 0 0 1 8 3h6a3.5 3.5 0 0 1 3.5 3.5v12Zm0-11h13m0 3h2.25V15H17.5m-10 6.25h.01m6.99 0h.01");
}
</style><path class="fu1wyubwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:galley-container"} {...others} />);
}

export default Component;
