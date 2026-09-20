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

.r1gclvbbm {
  d: path("m2 12 5 5 8 -8");
}
</style><g class="nrj6p8qat"><path class="r1gclvbbm"/><path class="ks2swpbkw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:done-all-outline-regular"} {...others} />);
}

export default Component;
