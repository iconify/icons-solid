import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g944xoblh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 2.5v19M2.5 6H21m-8.5 0H19a1.5 1.5 0 0 1 1.5 1.5v5A1.5 1.5 0 0 1 19 14h-6.5a1.5 1.5 0 0 1-1.5-1.5v-5A1.5 1.5 0 0 1 12.5 6M4 21.5h6");
}
</style><path class="g944xoblh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:courtesy-flag"} {...others} />);
}

export default Component;
