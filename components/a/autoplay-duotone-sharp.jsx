import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fcxqwv4fk {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20 16a8.944 8.944 0 1 1 0-8m-4 0h4V4M10 8l6 4l-6 4z");
}

.ft5dv1b6b {
  fill: none;
}

.lz7dp66iy {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m10 8l6 4l-6 4Z");
}
</style><g class="ft5dv1b6b"><path class="lz7dp66iy"/><path class="fcxqwv4fk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:autoplay-duotone-sharp"} {...others} />);
}

export default Component;
