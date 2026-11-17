import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fnvm7882u {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 11v7h16v-7a2 2 0 1 0-4 0v2H8v-2a2 2 0 1 0-4 0m2 7v2m12-2v2M6 9V4h12v5");
}

.ft5dv1b6b {
  fill: none;
}

.j80wt5jnb {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 11a2 2 0 1 1 4 0v2h8v-2a2 2 0 1 1 4 0v7H4Z");
}
</style><g class="ft5dv1b6b"><path class="j80wt5jnb"/><path class="fnvm7882u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:armchair-duotone-sharp"} {...others} />);
}

export default Component;
