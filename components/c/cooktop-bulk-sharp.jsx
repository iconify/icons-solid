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

.xll1gyu6b {
  d: path("M5 7.997a3 3 0 1 1 6 0A3 3 0 0 1 5 8ZM7 8a1 1 0 1 0 2 0a1 1 0 0 0-2 0m6.236-1.168a3 3 0 1 1 5.527 2.338a3 3 0 0 1-5.527-2.338M17 8a1 1 0 1 0-2 0a1 1 0 0 0 2 0M5 15.997a3 3 0 1 1 6 0A3 3 0 0 1 5 16ZM7 16a1 1 0 1 0 2 0a1 1 0 0 0-2 0m6.236-1.168a3 3 0 1 1 5.527 2.338a3 3 0 0 1-5.527-2.338M17 16a1 1 0 1 0-2 0a1 1 0 0 0 2 0");
}
</style><g class="cuyn6tgcc"><path class="td1bzxb2d"/><path class="xll1gyu6b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:cooktop-bulk-sharp"} {...others} />);
}

export default Component;
