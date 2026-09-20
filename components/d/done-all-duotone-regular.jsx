import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ks2swpbkw {
  d: path("m9 12 5 5 8 -8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qy-vhrjxc {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m2 12 5 5 8 -8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.r1gclvbbm {
  d: path("m2 12 5 5 8 -8");
}

.tv3a5iipi {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m9 12 5 5 8 -8");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="qy-vhrjxc"/><path class="tv3a5iipi"/><path class="r1gclvbbm"/><path class="ks2swpbkw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:done-all-duotone-regular"} {...others} />);
}

export default Component;
