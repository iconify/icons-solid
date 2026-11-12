import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.mk3e33uej {
  d: path("M20 7a1 1 0 0 1 2 0v14a1 1 0 0 1-1 1H7a1 1 0 0 1 0-2h13Z");
}

.nciz9v9-c {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 2h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1");
}
</style><g class="cuyn6tgcc"><path class="nciz9v9-c"/><path class="mk3e33uej"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:drop-shadow-bulk-sharp"} {...others} />);
}

export default Component;
