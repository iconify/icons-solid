import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.oid6zrcpk {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M17 8a2 2 0 1 1-3.999.001A2 2 0 0 1 17 8m-6 8a2 2 0 1 1-3.999.001A2 2 0 0 1 11 16");
}

.ycowsc4im {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 14a2 2 0 1 1 0 4a2 2 0 0 1 0-4m6-8a2 2 0 1 1 0 4a2 2 0 0 1 0-4M9 3v11m0 4v3m6-18v3m0 4v11");
}
</style><g class="ft5dv1b6b"><path class="oid6zrcpk"/><path class="ycowsc4im"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:slider-vertical-1-duotone-round"} {...others} />);
}

export default Component;
