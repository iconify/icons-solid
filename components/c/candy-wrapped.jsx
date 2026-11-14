import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gplhq8b1i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 12a5 4 0 1 0 10 0a5 4 0 1 0-10 0m-1.522-1.184l-.728-.566a1.394 1.394 0 0 0-2.25 1.1v1.3a1.394 1.394 0 0 0 2.25 1.1l.728-.566a1.5 1.5 0 0 0 0-2.368m13.044 0l.728-.566a1.394 1.394 0 0 1 2.25 1.1v1.3a1.394 1.394 0 0 1-2.25 1.1l-.728-.566a1.5 1.5 0 0 1 0-2.368M10 9.5l1.5 5");
}
</style><path class="gplhq8b1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:candy-wrapped"} {...others} />);
}

export default Component;
