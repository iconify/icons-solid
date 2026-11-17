import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.qra6f8bsx {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 21h18M5 21V7a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14M8 7h.01M8 11h.01M12 7h.01M12 11h.01M16 7h.01M16 11h.01M9 16h6m-5 5v-5m4 5v-5");
}

.soagsix4r {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 21V7a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14Z");
}
</style><g class="ft5dv1b6b"><path class="soagsix4r"/><path class="qra6f8bsx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:hotel-duotone-round"} {...others} />);
}

export default Component;
