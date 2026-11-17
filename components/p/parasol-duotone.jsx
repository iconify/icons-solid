import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.qv4365oyx {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 17a8.945 8.945 0 0 1 16-8Z");
}

.r9agv1b8l {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 17a8.944 8.944 0 1 1 16-8Zm-1 4h18m-9-8l4 8");
}
</style><g class="ft5dv1b6b"><path class="qv4365oyx"/><path class="r9agv1b8l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:parasol-duotone"} {...others} />);
}

export default Component;
