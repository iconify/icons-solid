import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.stm4lebns {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 8.25a6.25 6.25 0 1 0 12.5 0a6.25 6.25 0 1 0-12.5 0Zm6.25 6.25v7m7.5 0l-3-3a2 2 0 0 1 3-2.5a2 2 0 0 1 3 2.5Z");
}
</style><path class="stm4lebns"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:adopt-a-tree"} {...others} />);
}

export default Component;
