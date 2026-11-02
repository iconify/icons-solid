import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.igiyv1u5n {
  d: path("M5 18a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h11a5 5 0 0 1 5 5v6a2 2 0 0 1-2 2M9 18h6M3 10h12M9 5v5m5-5l1 5v1a1 1 0 0 0 1 1h5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.x-d5t_gmw {
  stroke-opacity: 0.4;
  d: path("M5 18a2 2 0 1 0 4 0a2 2 0 0 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}
</style><g class="nrj6p8qat"><path class="x-d5t_gmw"/><path class="igiyv1u5n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:coach-duocolor"} {...others} />);
}

export default Component;
