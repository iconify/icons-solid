import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d1z6e2btk {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 19H3V5h18v14zM3 5l6 6h6l6-6");
}

.ft5dv1b6b {
  fill: none;
}

.j5kzwobro {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 19V5h18v14Z");
}
</style><g class="ft5dv1b6b"><path class="j5kzwobro"/><path class="d1z6e2btk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:mail-duotone-sharp"} {...others} />);
}

export default Component;
