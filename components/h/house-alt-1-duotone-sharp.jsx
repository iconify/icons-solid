import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.amr7ohb1p {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M14 17a2 2 0 1 0-4 0v4H4V10l8-7l8 7v11h-6Z");
}

.ft5dv1b6b {
  fill: none;
}

.g5thndb3y {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14 17v4h6V10l-8-7l-8 7v11h6v-4a2 2 0 1 1 4 0");
}
</style><g class="ft5dv1b6b"><path class="amr7ohb1p"/><path class="g5thndb3y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:house-alt-1-duotone-sharp"} {...others} />);
}

export default Component;
