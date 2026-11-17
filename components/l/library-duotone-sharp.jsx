import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.q-f3-ovlb {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 3h8v18H4Zm4 0v18m8-17l4 16l-4 1l-4-16m0 0l4-1");
}

.x8-7366he {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 3h8v18H4Zm12 18L12 5l4-1l4 16Z");
}
</style><g class="ft5dv1b6b"><path class="x8-7366he"/><path class="q-f3-ovlb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:library-duotone-sharp"} {...others} />);
}

export default Component;
