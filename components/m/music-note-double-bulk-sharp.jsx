import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.gqjs11iml {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 17a4 4 0 1 1 8 0a4 4 0 0 1-8 0");
}

.r2x522bcx {
  d: path("M11 17V4a1 1 0 0 1 1.447-.894l6 3a1 1 0 1 1-.894 1.788L13 5.618v2.764l3.447 1.724a1 1 0 1 1-.894 1.788L13 10.618V17a1 1 0 0 1-2 0");
}
</style><g class="cuyn6tgcc"><path class="gqjs11iml"/><path class="r2x522bcx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:music-note-double-bulk-sharp"} {...others} />);
}

export default Component;
