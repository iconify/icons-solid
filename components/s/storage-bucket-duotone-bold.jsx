import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hspl6tj_s {
  d: path("M4 7a8 3 0 0 1 16 0v10a8 3 0 0 1 -16 0Z");
}

.pmbwi9b0n {
  d: path("M4 7a8 3 0 0 0 16 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.xz28jbbzy {
  fill: currentColor;
  d: path("M4 7a8 3 0 0 1 16 0v10a8 3 0 0 1 -16 0Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="xz28jbbzy"/><path class="hspl6tj_s"/><path class="pmbwi9b0n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:storage-bucket-duotone-bold"} {...others} />);
}

export default Component;
