import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u6ldk8bsh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 9a1 1 0 1 0 2 0a1 1 0 1 0-2 0ZM11 9a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm6.5 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm-13 6a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm6.5 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm6.5 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}
</style><path class="u6ldk8bsh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:drag-handle-horizontal"} {...others} />);
}

export default Component;
