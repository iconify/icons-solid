import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuibdnegp {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 3h4v4H3Zm7 7l11 4l-5 2l-2 5Z");
}

.ft5dv1b6b {
  fill: none;
}

.lcsuvo4fg {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3h4v4H3Zm7 7l11 4l-5 2l-2 5z");
}
</style><g class="ft5dv1b6b"><path class="cuibdnegp"/><path class="lcsuvo4fg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:cursor-square-duotone-sharp"} {...others} />);
}

export default Component;
