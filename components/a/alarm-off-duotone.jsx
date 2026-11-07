import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.h4rg4j2_u {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M12 5a8 8 0 0 1 8 8Zm6.568 12.568A7.998 7.998 0 0 1 4.164 14.61a8 8 0 0 1 3.268-8.178Z");
}

.qno1o-b9v {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.432 6.432a8 8 0 1 0 11.137 11.137M20 13a8 8 0 0 0-8-8M3 6l2-2m13-1l3 3M3 2l19 19");
}
</style><g class="ft5dv1b6b"><path class="h4rg4j2_u"/><path class="qno1o-b9v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:alarm-off-duotone"} {...others} />);
}

export default Component;
