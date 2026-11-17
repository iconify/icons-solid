import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.qjqqbra1l {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M16 6a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2Zm0 5a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2Zm0 5a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2Z");
}

.uj3h5nb2x {
  d: path("M9 21a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0Zm8 0a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0Z");
}
</style><g class="cuyn6tgcc"><path class="qjqqbra1l"/><path class="uj3h5nb2x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:ladder-bulk-sharp"} {...others} />);
}

export default Component;
