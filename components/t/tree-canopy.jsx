import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wq9236bns {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 16a4 4 0 0 1-1.5-7.5a5 5 0 0 1 8.5-4a4.5 4.5 0 0 1 5 8.5a3.5 3.5 0 0 1-2 3Zm5 0v5.5m0-2.5l-3-3");
}
</style><path class="wq9236bns"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:tree-canopy"} {...others} />);
}

export default Component;
