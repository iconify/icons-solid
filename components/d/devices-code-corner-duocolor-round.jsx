import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xabv9lb4f {
  d: path("M15 6a3 3 0 0 1 6 0v4a3 3 0 0 1-6 0Zm-4-2H7a4 4 0 0 0-4 4v4a4 4 0 0 0 4 4h3");
}

.zxl6wqb0d {
  stroke-opacity: 0.4;
  d: path("m15 17l-2 2l2 2m4-4l2 2l-2 2");
}
</style><g class="nrj6p8qat"><path class="zxl6wqb0d"/><path class="xabv9lb4f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:devices-code-corner-duocolor-round"} {...others} />);
}

export default Component;
