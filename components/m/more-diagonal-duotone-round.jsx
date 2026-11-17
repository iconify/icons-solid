import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.do3x_vbln {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M17 8a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-5 5a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-5 5a1 1 0 1 1 0-2a1 1 0 0 1 0 2");
}

.ft5dv1b6b {
  fill: none;
}

.ltwks1vjp {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 17a1 1 0 1 0 2 0a1 1 0 0 0-2 0m5-5a1 1 0 1 0 2 0a1 1 0 0 0-2 0m5-5a1 1 0 1 0 2 0a1 1 0 0 0-2 0");
}
</style><g class="ft5dv1b6b"><path class="do3x_vbln"/><path class="ltwks1vjp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:more-diagonal-duotone-round"} {...others} />);
}

export default Component;
