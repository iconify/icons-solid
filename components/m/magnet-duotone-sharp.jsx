import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.h6igbfesr {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 12V3h5v9a4 4 0 1 0 8 0V3h5v9a9 9 0 0 1-18 0m0-4h5m8 0h5");
}

.vpzy1fb5o {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 12V3h5v9a4 4 0 0 0 8 0V3h5v9a9 9 0 0 1-9 9a9 9 0 0 1-9-9");
}
</style><g class="ft5dv1b6b"><path class="vpzy1fb5o"/><path class="h6igbfesr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:magnet-duotone-sharp"} {...others} />);
}

export default Component;
