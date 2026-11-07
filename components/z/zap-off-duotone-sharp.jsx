import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.gdnfkebzl {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m17 14l3-3h-6V3l-4 4m-3 3l-3 3h6v8l4-4M2 5l17 17");
}

.r22-azgwv {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m10 7l4-4v8h6l-3 3Zm-3 3l7 7l-4 4v-8H4Z");
}
</style><g class="ft5dv1b6b"><path class="r22-azgwv"/><path class="gdnfkebzl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:zap-off-duotone-sharp"} {...others} />);
}

export default Component;
