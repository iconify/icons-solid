import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c069snb-g {
  d: path("M5.707 9.707L3.414 12l2.293 2.293a.999.999 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a.999.999 0 1 1 1.414 1.414m14-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L20.586 12l-2.293-2.293a1 1 0 0 1 1.414-1.414");
}

.cuyn6tgcc {
  fill: currentColor;
}

.sqw0gib2y {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m14.707 9.293l2 2a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a.997.997 0 0 1 0-1.414l4-4a.997.997 0 0 1 1.414 0Z");
}
</style><g class="cuyn6tgcc"><path class="sqw0gib2y"/><path class="c069snb-g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:keyframes-bulk-sharp"} {...others} />);
}

export default Component;
