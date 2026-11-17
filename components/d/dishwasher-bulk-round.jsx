import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cjeceabih {
  d: path("M8 5h.01a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2m3 0h.01a1 1 0 0 1 0 2H11a1 1 0 0 1 0-2M4 8h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2m4 4h8a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2");
}

.cuyn6tgcc {
  fill: currentColor;
}

.jnlx1ibsq {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 7a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v10a5 5 0 0 1-1.464 3.536A5 5 0 0 1 16 22H8a5 5 0 0 1-5-5Z");
}
</style><g class="cuyn6tgcc"><path class="jnlx1ibsq"/><path class="cjeceabih"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:dishwasher-bulk-round"} {...others} />);
}

export default Component;
