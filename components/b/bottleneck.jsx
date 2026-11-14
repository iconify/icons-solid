import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hpjpzbcmy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4.5C8 4.5 8.5 9 12 9s4-4.5 9.5-4.5m-19 15c5.5 0 6-4.5 9.5-4.5s4 4.5 9.5 4.5M6 12h11m-2-2l2 2l-2 2");
}
</style><path class="hpjpzbcmy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bottleneck"} {...others} />);
}

export default Component;
