import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bkz0g3b1y {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 12V5a2 2 0 0 1 2-2h7c.64 0 1.36.36 2 1l2 2c.64.64 1 1.36 1 2v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm4-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Zm0 3h6");
}

.ft5dv1b6b {
  fill: none;
}

.hrd-aobkh {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 5a2 2 0 0 1 2-2h7c.763 0 1.479.48 2 1l2 2c.52.521 1 1.237 1 2v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Z");
}
</style><g class="ft5dv1b6b"><path class="hrd-aobkh"/><path class="bkz0g3b1y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:sim-card-duotone"} {...others} />);
}

export default Component;
