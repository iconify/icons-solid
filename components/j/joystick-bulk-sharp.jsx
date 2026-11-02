import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.etv1o2b_d {
  d: path("M13 9.874V15a1 1 0 0 1-2 0V9.874a4 4 0 1 1 2 0M6 13a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0Z");
}

.j8usx3bjs {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 15a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Z");
}
</style><g class="cuyn6tgcc"><path class="j8usx3bjs"/><path class="etv1o2b_d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:joystick-bulk-sharp"} {...others} />);
}

export default Component;
