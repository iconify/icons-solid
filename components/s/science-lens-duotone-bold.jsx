import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.axr5pmbgx {
  fill: currentColor;
  d: path("M4 12c4 -8 12 -8 16 0 -4 8 -12 8 -16 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.r7xk8o29f {
  d: path("M12 4v16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.up7vunb7t {
  d: path("M4 12c4 -8 12 -8 16 0 -4 8 -12 8 -16 0");
}
</style><g class="s0phu2bbs"><path class="axr5pmbgx"/><path class="up7vunb7t"/><path class="r7xk8o29f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:science-lens-duotone-bold"} {...others} />);
}

export default Component;
