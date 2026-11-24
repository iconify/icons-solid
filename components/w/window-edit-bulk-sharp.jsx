import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b9230rjdv {
  d: path("M3 7h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m5 8c0-.265.105-.52.293-.707l4-4a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 .159 1.207a1 1 0 0 1-.159 1.207l-4 4A1 1 0 0 1 11 19H9a1 1 0 0 1-1-1Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.rufoxdbmp {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1");
}
</style><g class="cuyn6tgcc"><path class="rufoxdbmp"/><path class="b9230rjdv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:window-edit-bulk-sharp"} {...others} />);
}

export default Component;
