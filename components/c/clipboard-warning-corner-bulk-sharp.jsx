import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bjbmh9bgh {
  d: path("M9 8a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1Zm9 6v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0m-1 6h.01a1 1 0 0 1 0 2H17a1 1 0 0 1 0-2");
}

.cuyn6tgcc {
  fill: currentColor;
}

.iwmlgmb_p {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 4h14a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-9v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1");
}
</style><g class="cuyn6tgcc"><path class="iwmlgmb_p"/><path class="bjbmh9bgh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:clipboard-warning-corner-bulk-sharp"} {...others} />);
}

export default Component;
