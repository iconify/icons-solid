import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bh8bfp9qd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 16.25a5.75 5.75 0 0 1 8-4a5.75 5.75 0 0 1-8 4m11-4a5.75 5.75 0 0 1 8 4a5.75 5.75 0 0 1-8-4m-6-5a5.75 5.75 0 0 1 9 0a5.75 5.75 0 0 1-9 0m-4.5 12h18");
}
</style><path class="bh8bfp9qd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:leaf-pile"} {...others} />);
}

export default Component;
