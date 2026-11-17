import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.laz4rfcyt {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M7 4h10A5 5 0 0 1 7 4");
}

.ozd9b4b-j {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17 4A5 5 0 0 1 7 4M4 4h16m-2 8a10 10 0 0 1-12 0m15 4a15 15 0 0 1-18 0");
}
</style><g class="ft5dv1b6b"><path class="laz4rfcyt"/><path class="ozd9b4b-j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:motion-sensor-duotone"} {...others} />);
}

export default Component;
