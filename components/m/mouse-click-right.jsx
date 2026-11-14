import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rr2nxd61q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 5.5zA5.5 5.5 0 0 1 15 11v5a5.5 5.5 0 0 1-5.5 5.5A5.5 5.5 0 0 1 4 16v-5a5.5 5.5 0 0 1 5.5-5.5m0 0V11M4 11h11m6-8l-2 2m2.5 3.5H19m-3.5-6v1");
}
</style><path class="rr2nxd61q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:mouse-click-right"} {...others} />);
}

export default Component;
