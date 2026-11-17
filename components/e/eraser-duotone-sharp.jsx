import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.mff6osbjl {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 16L15 4l6 6l-10 10H7Z");
}

.y9mnqqtwa {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m15 16l6-6l-6-6l-6 6m2 10h10M9 10l6 6m-6-6l-6 6l4 4h4l4-4");
}
</style><g class="ft5dv1b6b"><path class="mff6osbjl"/><path class="y9mnqqtwa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:eraser-duotone-sharp"} {...others} />);
}

export default Component;
