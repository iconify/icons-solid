import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cgha4ub1e {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M20 12v3c-.001 1.305-.863 2.431-2 3l-4 2a4.47 4.47 0 0 1-4 0l-4-2c-1.137-.569-1.999-1.695-2-3V9c.001-1.305.863-2.431 2-3l4-2a4.47 4.47 0 0 1 4 0l4 2c1.137.569 1.999 1.695 2 3Z");
}

.ft5dv1b6b {
  fill: none;
}

.pxz5z6-my {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20 12v3c0 1.226-.774 2.387-2 3l-4 2a4.47 4.47 0 0 1-4 0l-4-2c-1.226-.613-2-1.774-2-3V9c0-1.226.774-2.387 2-3l4-2a4.47 4.47 0 0 1 4 0l4 2c1.226.613 2 1.774 2 3z");
}
</style><g class="ft5dv1b6b"><path class="cgha4ub1e"/><path class="pxz5z6-my"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:hexagon-duotone-round"} {...others} />);
}

export default Component;
