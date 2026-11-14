import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cf1xi4bge {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 2.5h4.5A1.75 1.75 0 0 1 16 4.25v.5a1.75 1.75 0 0 1-1.75 1.75h-4.5A1.75 1.75 0 0 1 8 4.75v-.5A1.75 1.75 0 0 1 9.75 2.5m.25 4v13a2 2 0 0 0 4 0v-13m-4 4l4-1m-4 4l4-1m-4 4l4-1");
}
</style><path class="cf1xi4bge"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:hex-bolt"} {...others} />);
}

export default Component;
