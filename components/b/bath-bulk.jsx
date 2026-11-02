import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.tt7zpdcyl {
  d: path("M3 13a1 1 0 0 1 0-2h1V6a3 3 0 1 1 6 0a1 1 0 0 1-2 0a1.001 1.001 0 0 0-2 0v5h15a1 1 0 0 1 0 2Zm6 7a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0Zm8 0a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0Z");
}

.x6t4l0b5i {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 11h14a1 1 0 0 1 1 1v4a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-4a1 1 0 0 1 1-1");
}
</style><g class="cuyn6tgcc"><path class="x6t4l0b5i"/><path class="tt7zpdcyl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:bath-bulk"} {...others} />);
}

export default Component;
