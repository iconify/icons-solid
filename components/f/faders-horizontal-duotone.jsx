import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.h6zalwbsx {
  d: path("M176 80a8 8 0 0 1 8-8h32a8 8 0 0 1 0 16h-32a8 8 0 0 1-8-8M40 88h104v16a8 8 0 0 0 16 0V56a8 8 0 0 0-16 0v16H40a8 8 0 0 0 0 16m176 80h-96a8 8 0 0 0 0 16h96a8 8 0 0 0 0-16M88 144a8 8 0 0 0-8 8v16H40a8 8 0 0 0 0 16h40v16a8 8 0 0 0 16 0v-48a8 8 0 0 0-8-8");
}

.yfmh_wrgi {
  d: path("M216 80v96H40V80Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="yfmh_wrgi"/><path class="h6zalwbsx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:faders-horizontal-duotone"} {...others} />);
}

export default Component;
