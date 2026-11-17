import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bowdlyb0b {
  d: path("M14 9a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0Zm-5 3a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Zm5 9a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.td1bzxb2d {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 2h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1");
}
</style><g class="cuyn6tgcc"><path class="td1bzxb2d"/><path class="bowdlyb0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:floor-plan-bulk-sharp"} {...others} />);
}

export default Component;
