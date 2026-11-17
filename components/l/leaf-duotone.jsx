import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dg-key1ae {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 17c7 4 13-1 12-12C8 4 3 10 7 17m-3 3l3-3m0 0l6-6");
}

.ft5dv1b6b {
  fill: none;
}

.lfwz14k8f {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M7 17C3 10 8 4 19 5c1 11-5 16-12 12");
}
</style><g class="ft5dv1b6b"><path class="lfwz14k8f"/><path class="dg-key1ae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:leaf-duotone"} {...others} />);
}

export default Component;
