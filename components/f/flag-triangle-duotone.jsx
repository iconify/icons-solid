import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.kdp3u_b2y {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M6 5c0-.919 1.081-1.459 2-1l8 4a1.118 1.118 0 0 1 0 2L6 15Z");
}

.xk631pq9e {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 15V5c0-.919 1.081-1.46 2-1l8 4a1.118 1.118 0 0 1 0 2zm0 0v6");
}
</style><g class="ft5dv1b6b"><path class="kdp3u_b2y"/><path class="xk631pq9e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:flag-triangle-duotone"} {...others} />);
}

export default Component;
