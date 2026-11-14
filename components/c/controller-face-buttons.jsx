import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.stm6kbcsh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 5.5h10a4.5 4.5 0 0 1 4.5 4.5v6a2.5 2.5 0 0 1-4.25 1.75L15.5 16h-7l-1.75 1.75A2.5 2.5 0 0 1 2.5 16v-6A4.5 4.5 0 0 1 7 5.5Zm9 2.75h.01m-.01 5h.01m-2.51-2.5h.01m4.99 0h.01");
}
</style><path class="stm6kbcsh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:controller-face-buttons"} {...others} />);
}

export default Component;
