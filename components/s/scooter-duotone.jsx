import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.qrm6jlbhw {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 4h-4l2 12M7 18h5c2 0 2-8 6-8M3 18a2 2 0 1 0 4 0a2 2 0 0 0-4 0m14 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}

.wk0ignbhf {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 20a2 2 0 1 1-.001-3.999A2 2 0 0 1 5 20m14 0a2 2 0 1 1-.001-3.999A2 2 0 0 1 19 20");
}
</style><g class="ft5dv1b6b"><path class="wk0ignbhf"/><path class="qrm6jlbhw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:scooter-duotone"} {...others} />);
}

export default Component;
