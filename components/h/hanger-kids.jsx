import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m59dmik8k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 8.5v-1a1.75 1.75 0 1 0-1.75-1.75M12.71 15H3.5c0-3 4-5 8.5-6.5c3.413 1.138 6.538 2.563 7.849 4.494M15 18.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm.5-2.75h.01m4.99 0h.01");
}
</style><path class="m59dmik8k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:hanger-kids"} {...others} />);
}

export default Component;
