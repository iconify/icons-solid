import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.n256ixhmk {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 11h18a9 9 0 0 1-9 9a9 9 0 0 1-9-9");
}

.szj86mbyh {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 11h18a9 9 0 0 1-18 0m6-6L8 7m5-2l-1 2m5-2l-1 2m3 4l2-5");
}
</style><g class="ft5dv1b6b"><path class="n256ixhmk"/><path class="szj86mbyh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:soup-duotone"} {...others} />);
}

export default Component;
