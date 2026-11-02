import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.l32i-vfaf {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M19.496 4.136A1.002 1.002 0 0 1 21 5v14a.998.998 0 0 1-1.504.864l-12-7a1 1 0 0 1 0-1.728Z");
}

.ly4mftb3k {
  d: path("M5 5v14a1 1 0 0 1-2 0V5a1 1 0 0 1 2 0");
}
</style><g class="cuyn6tgcc"><path class="l32i-vfaf"/><path class="ly4mftb3k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:skip-back-bulk-sharp"} {...others} />);
}

export default Component;
