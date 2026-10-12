import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wot3qkb6x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 8.25h7.5a2 2 0 0 1 2 2v.25h1.25a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1.25v.25a2 2 0 0 1-2 2h-7.5a2 2 0 0 1-2-2v-3.5a2 2 0 0 1 2-2m1 3.75h3.5m9.25 0h2.75m-2.5-4.25l2-1.25m-2 9.75l2 1.25");
}
</style><path class="wot3qkb6x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:laser"} {...others} />);
}

export default Component;
