import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.my0qmcc3d {
  d: path("m13 10.586l1.293-1.293a.999.999 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a.999.999 0 1 1 1.414-1.414L11 10.586V3a1 1 0 0 1 2 0Z");
}

.zo-37vb0x {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M9.236 17.832a3 3 0 1 1 5.527 2.338a3 3 0 0 1-5.527-2.338m2.057 1.875a.999.999 0 1 0 1.414-1.414a.999.999 0 1 0-1.414 1.414");
}
</style><g class="cuyn6tgcc"><path class="zo-37vb0x"/><path class="my0qmcc3d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:step-into-bulk"} {...others} />);
}

export default Component;
