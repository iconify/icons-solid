import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.gxesbv2vg {
  d: path("M9 3v18a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0");
}

.iqzghnz2m {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4 2h8a1 1 0 0 1 1 1v.719l2.757-.689a1 1 0 0 1 1.213.727l4 16a1 1 0 0 1-.727 1.213l-4 1a1 1 0 0 1-1.213-.727L13 13.123V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1");
}
</style><g class="cuyn6tgcc"><path class="iqzghnz2m"/><path class="gxesbv2vg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:library-bulk-sharp"} {...others} />);
}

export default Component;
