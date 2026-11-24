import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.r4g2h7b0b {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M11 22H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-8v9a1 1 0 0 1-1 1");
}

.wt2ym8g3i {
  d: path("M17 7v2a1 1 0 0 1-2 0V7a3 3 0 1 0-6 0v2a1 1 0 0 1-2 0V7a5 5 0 0 1 10 0m-2 9h6a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="r4g2h7b0b"/><path class="wt2ym8g3i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:lock-minus-corner-bulk-sharp"} {...others} />);
}

export default Component;
