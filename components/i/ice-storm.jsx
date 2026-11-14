import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mjfbg2rdi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 14.5a3.5 3.5 0 0 1 0-7a5 5 0 0 1 9.5-.5a3.75 3.75 0 0 1 0 7.5Zm.5 0l1 4.5l1-4.5m1.75 0l1 6l1-6m1.75 0l1 4.5l1-4.5");
}
</style><path class="mjfbg2rdi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:ice-storm"} {...others} />);
}

export default Component;
