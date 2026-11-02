import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.fqtyq4s6p {
  d: path("m12.414 12l5.293 5.293a.999.999 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a.999.999 0 1 1 1.414 1.414Z");
}

.z6pkljbys {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M8 6v12a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0");
}
</style><g class="cuyn6tgcc"><path class="z6pkljbys"/><path class="fqtyq4s6p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chevron-left-to-line-bulk-round"} {...others} />);
}

export default Component;
