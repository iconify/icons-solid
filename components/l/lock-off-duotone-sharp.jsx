import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.jqw_fcb2s {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M18 21H4V10h3Zm-5-11h7v7Z");
}

.ummuipbwu {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18 21H4V10h3m6 0h7v7M9 6a3 3 0 0 1 6 0v4M2 5l17 17");
}
</style><g class="ft5dv1b6b"><path class="jqw_fcb2s"/><path class="ummuipbwu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:lock-off-duotone-sharp"} {...others} />);
}

export default Component;
