import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.dhpxnuokf {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4 19h17a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0Z");
}

.y4chwetsg {
  d: path("M12 9a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0Zm-4 7a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0Zm8-4a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0Zm4 4a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0Z");
}
</style><g class="cuyn6tgcc"><path class="dhpxnuokf"/><path class="y4chwetsg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chart-waterfall-bulk-sharp"} {...others} />);
}

export default Component;
