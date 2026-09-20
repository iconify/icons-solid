import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cpmzr29ux {
  d: path("m16 8 4 4 -4 4 -4 -4Z");
}

.d223d_x9q {
  d: path("M3 12h6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.uhawluh-v {
  d: path("M6.5 9.5 9 12l-2.5 2.5");
}
</style><g class="nrj6p8qat"><path class="d223d_x9q"/><path class="uhawluh-v"/><path class="cpmzr29ux"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:encoder-only-outline-regular"} {...others} />);
}

export default Component;
