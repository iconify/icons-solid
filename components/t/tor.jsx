import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z8mtrgb2d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5C5 18 6 17 8 17h8c2 0 3 1 5.5 3.5m-12.75-8h6.5a2.25 2.25 0 0 1 2.25 2.25A2.25 2.25 0 0 1 15.25 17h-6.5a2.25 2.25 0 0 1-2.25-2.25a2.25 2.25 0 0 1 2.25-2.25m1.25-4h4.5a2 2 0 0 1 2 2a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2a2 2 0 0 1 2-2m2-4h2a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2a2 2 0 0 1 2-2");
}
</style><path class="z8mtrgb2d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:tor"} {...others} />);
}

export default Component;
