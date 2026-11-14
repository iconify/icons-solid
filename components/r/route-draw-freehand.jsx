import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q4kxd-b2p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9 14.75l.405-1.824a1.5 1.5 0 0 1 .404-.735l7.13-7.13a1.5 1.5 0 0 1 2.122 0l1.378 1.378a1.5 1.5 0 0 1 0 2.122l-7.13 7.13a1.5 1.5 0 0 1-.735.404l-1.824.405A1.467 1.467 0 0 1 9 14.75m.5-2.25L13 16M2.5 20.5c2-4 3.5 2 6-3.5");
}
</style><path class="q4kxd-b2p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:route-draw-freehand"} {...others} />);
}

export default Component;
