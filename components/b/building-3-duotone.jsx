import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.hzlwxcgas {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 20h18M5 20v-6.039a2 2 0 0 1 .75-1.561l3-2.4a2 2 0 0 1 2.5 0l3 2.4a2 2 0 0 1 .75 1.56V20m-8-8.6V4h10a2 2 0 0 1 2 2v14");
}

.n3hrjk_cn {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 20v-6.039c0-.607.276-1.182.751-1.561l3-2.4a2 2 0 0 1 2.498 0l3 2.4c.475.379.751.954.751 1.561V20Z");
}
</style><g class="ft5dv1b6b"><path class="n3hrjk_cn"/><path class="hzlwxcgas"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:building-3-duotone"} {...others} />);
}

export default Component;
