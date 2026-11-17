import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.t6mud7fht {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 3h16v18H4Z");
}

.w989ndpzr {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 3h16v18H4Zm0 6h16M8 6h.01M11 6h.01M9 15a3 3 0 0 1 6 0m0 0a3 3 0 0 1-6 0");
}
</style><g class="ft5dv1b6b"><path class="t6mud7fht"/><path class="w989ndpzr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:washing-machine-duotone-sharp"} {...others} />);
}

export default Component;
