import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.etcad4b9c {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M22 4v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1");
}

.sd3hecchs {
  d: path("M3 7h18a1 1 0 0 1 0 2H10v11a1 1 0 0 1-2 0V9H3a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="etcad4b9c"/><path class="sd3hecchs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:window-sidebar-bulk-sharp"} {...others} />);
}

export default Component;
