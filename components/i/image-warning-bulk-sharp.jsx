import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.td1bzxb2d {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 2h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1");
}

.w3uu0lbgp {
  d: path("M16 6v3a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0m-1 5h.01a1 1 0 0 1 0 2H15a1 1 0 0 1 0-2M2.293 16.293l4-4a1 1 0 0 1 1.414 0l8 8a.999.999 0 1 1-1.414 1.414L7 14.414l-3.293 3.293a.999.999 0 1 1-1.414-1.414");
}
</style><g class="cuyn6tgcc"><path class="td1bzxb2d"/><path class="w3uu0lbgp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:image-warning-bulk-sharp"} {...others} />);
}

export default Component;
