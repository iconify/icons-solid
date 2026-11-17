import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.mnp_qjb8o {
  d: path("M19 4v2h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0V8h-2a1 1 0 0 1 0-2h2V4a1 1 0 0 1 2 0");
}

.q95mx0efm {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M6 11.423V5a3 3 0 1 1 6 0v6.423a5.473 5.473 0 1 1-6 0");
}
</style><g class="cuyn6tgcc"><path class="q95mx0efm"/><path class="mnp_qjb8o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:thermometer-plus-bulk-sharp"} {...others} />);
}

export default Component;
