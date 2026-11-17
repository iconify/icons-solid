import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.xgkhdvb0w {
  d: path("M12 11h2a.998.998 0 0 1 .8 1.6l-3 4a1 1 0 0 1-1.6-1.2L12 13h-2a.998.998 0 0 1-.8-1.6l3-4a1 1 0 0 1 1.6 1.2Z");
}

.zdlyi6d5p {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M19 2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v10h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V7H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z");
}
</style><g class="cuyn6tgcc"><path class="zdlyi6d5p"/><path class="xgkhdvb0w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:fuse-bulk-sharp"} {...others} />);
}

export default Component;
