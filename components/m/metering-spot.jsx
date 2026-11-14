import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.les3llmaj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8.5v-2a2 2 0 0 1 2-2h3m9 0h3a2 2 0 0 1 2 2v2m0 7v2a2 2 0 0 1-2 2h-3m-9 0h-3a2 2 0 0 1-2-2v-2m6-3.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m3.5 0h.01");
}
</style><path class="les3llmaj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:metering-spot"} {...others} />);
}

export default Component;
