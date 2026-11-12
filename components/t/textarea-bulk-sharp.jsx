import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.chmvdccpm {
  d: path("M16 5a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2Zm-6 4a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2Zm8.293 3.293a.999.999 0 1 1 1.414 1.414l-6 6a.999.999 0 1 1-1.414-1.414Zm0 5a.999.999 0 1 1 1.414 1.414l-1 1a.999.999 0 1 1-1.414-1.414Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.td1bzxb2d {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 2h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1");
}
</style><g class="cuyn6tgcc"><path class="td1bzxb2d"/><path class="chmvdccpm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:textarea-bulk-sharp"} {...others} />);
}

export default Component;
