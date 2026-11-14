import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lywwe06lt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 2.5h6a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 8h9a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 7h9a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2a2 2 0 0 1 2-2m10.75-13H21m-2.25-2.25L21 4.5l-2.25 2.25");
}
</style><path class="lywwe06lt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:backlog-move"} {...others} />);
}

export default Component;
