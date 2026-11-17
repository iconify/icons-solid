import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.w29_zcc8r {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 17C1.262 12.302 4.584 3 12 3s10.738 9.302 5 14M5 19a2 2 0 0 1 2-2h10a2 2 0 1 1 0 4H7a2 2 0 0 1-2-2m4-9a3 3 0 0 1 3-3");
}

.xbbm33bot {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M7 17C1.266 12.293 4.581 3.009 12 3c7.419.009 10.734 9.293 5 14a2.006 2.006 0 0 1 2 2a2.006 2.006 0 0 1-2 2H7a2.006 2.006 0 0 1-2-2a2.006 2.006 0 0 1 2-2");
}
</style><g class="ft5dv1b6b"><path class="xbbm33bot"/><path class="w29_zcc8r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:crystal-ball-duotone-round"} {...others} />);
}

export default Component;
