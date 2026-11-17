import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fc1zot07z {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 19a2 2 0 0 1 2-2h14a2 2 0 1 1 0 4H5a2 2 0 0 1-2-2m4-6q2.221-2.5 0-5t0-5m5 10q2.221-2.5 0-5t0-5m5 10q2.222-2.5 0-5t0-5");
}

.ft5dv1b6b {
  fill: none;
}

.nvkykrb_s {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 17h14a2 2 0 1 1 0 4H5a2 2 0 1 1 0-4");
}
</style><g class="ft5dv1b6b"><path class="nvkykrb_s"/><path class="fc1zot07z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:heat-waves-surface-duotone"} {...others} />);
}

export default Component;
