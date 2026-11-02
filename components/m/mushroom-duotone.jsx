import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e7_jnabwg {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 11a8 8 0 1 1 16 0Zm6 0v8a2 2 0 1 0 4 0v-8");
}

.ft5dv1b6b {
  fill: none;
}

.mu7h5qd_z {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M20 12h-5v7a3 3 0 1 1-6 0v-7H4a1 1 0 0 1-1-1a9 9 0 0 1 9-9a9 9 0 0 1 9 9a1 1 0 0 1-1 1");
}
</style><g class="ft5dv1b6b"><path class="mu7h5qd_z"/><path class="e7_jnabwg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:mushroom-duotone"} {...others} />);
}

export default Component;
