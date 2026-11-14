import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g1undebpl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 13.5v-8a3 3 0 0 1 6 0v8a4.5 4.5 0 1 1-6 0M8 18v-3m10.5 0v6.5m2.815-4.875l-5.63 3.25m5.63 0l-5.63-3.25");
}
</style><path class="g1undebpl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:room-too-cold"} {...others} />);
}

export default Component;
