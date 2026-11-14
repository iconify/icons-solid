import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nccvlc13v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 15.5c-3 0-3.5-4.5-1-6c-.5-4 3-7 6-6.5c3-.5 6.5 2.5 6 6.5c2.5 1.5 2 6-1 6Zm5 0v6m-8.5 0c0-2 1.5-3.25 3.5-3.25c0 2-1.5 3.25-3.5 3.25m17 0c0-2-1.5-3.25-3.5-3.25c0 2 1.5 3.25 3.5 3.25");
}
</style><path class="nccvlc13v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:autumn-tree"} {...others} />);
}

export default Component;
