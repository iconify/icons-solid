import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.ebbehv36x {
  d: path("M8 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V4h-4v2a1 1 0 0 1-2 0Zm6 15a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-3a1 1 0 0 1 2 0v2h4Z");
}

.i3abjabnc {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M6 5h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1");
}
</style><g class="cuyn6tgcc"><path class="i3abjabnc"/><path class="ebbehv36x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:smartwatch-bulk-sharp"} {...others} />);
}

export default Component;
