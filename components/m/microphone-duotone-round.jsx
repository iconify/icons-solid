import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.k3q-de28s {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M9 6a3 3 0 1 1 6 0v5a3 3 0 1 1-6 0Z");
}

.ndpsvvlmm {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 6v5a3 3 0 0 0 6 0V6a3 3 0 0 0-6 0m3 12v3M5 10v1a7 7 0 0 0 14 0v-1");
}
</style><g class="ft5dv1b6b"><path class="k3q-de28s"/><path class="ndpsvvlmm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:microphone-duotone-round"} {...others} />);
}

export default Component;
