import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.r19z0eu0e {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m12.351 2.064l8 3a1 1 0 0 1 0 1.872l-8 3a1 1 0 0 1-.702 0l-8-3a1 1 0 0 1 0-1.872l8-3a1 1 0 0 1 .702 0");
}

.zr4xd_bgf {
  d: path("M21 9a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0ZM7 12v5a1 1 0 0 1-2 0v-5a1 1 0 0 1 2 0m4 0v5a1 1 0 0 1-2 0v-5a1 1 0 0 1 2 0m4 0v5a1 1 0 0 1-2 0v-5a1 1 0 0 1 2 0m4 0v5a1 1 0 0 1-2 0v-5a1 1 0 0 1 2 0M3 22a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2Z");
}
</style><g class="cuyn6tgcc"><path class="r19z0eu0e"/><path class="zr4xd_bgf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:university-bulk-sharp"} {...others} />);
}

export default Component;
