import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o_prxpb9g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 14.5h2.5a1.75 1.75 0 0 1 1.75 1.75v1A1.75 1.75 0 0 1 6.75 19h-2.5a1.75 1.75 0 0 1-1.75-1.75v-1a1.75 1.75 0 0 1 1.75-1.75m1.25 0l3-12m0 14.25a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m8 4.75V12a2.5 2.5 0 0 1 5 0v9.5");
}
</style><path class="o_prxpb9g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:croquet"} {...others} />);
}

export default Component;
