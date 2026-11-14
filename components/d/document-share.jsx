import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uqt27bc3b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4.5a2 2 0 0 1 2-2H9L12.5 6v13.5a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2ZM15 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m3.5-5.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m0 11a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-1.25-6.75l2-3m-2 5.5l2 3");
}
</style><path class="uqt27bc3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:document-share"} {...others} />);
}

export default Component;
