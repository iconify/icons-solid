import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.wi9z29bhf {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m13 3l6 6v6L7 3Zm6 18H5V7Z");
}

.ytcxscm9q {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 3H7M5 7v14h14m0-6V9m-6-6l6 6m-6-6v6h6M2 4l18 18");
}
</style><g class="ft5dv1b6b"><path class="wi9z29bhf"/><path class="ytcxscm9q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:file-off-duotone-sharp"} {...others} />);
}

export default Component;
