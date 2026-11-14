import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w32n7zb4f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 7.5a5 5 0 0 1 10 0Zm0 0l5 5m5-5l-5 5m-9.5 6a9.5 3 0 1 0 19 0a9.5 3 0 1 0-19 0m9.5 0h.01");
}
</style><path class="w32n7zb4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:skydive-drop-zone"} {...others} />);
}

export default Component;
