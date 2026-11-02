import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.tod98bcgn {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 9a3 3 0 0 0 0 6h6a3 3 0 0 0 0-6ZM3 4h18M3 20h18");
}

.zg2_d1b0k {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M9 9h6a3 3 0 1 1 0 6H9a3 3 0 1 1 0-6");
}
</style><g class="ft5dv1b6b"><path class="zg2_d1b0k"/><path class="tod98bcgn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:distribute-vertical-duotone-round"} {...others} />);
}

export default Component;
