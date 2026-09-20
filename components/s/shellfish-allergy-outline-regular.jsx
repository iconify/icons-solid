import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.myt_b32pc {
  d: path("M4 18a8 8 0 0 1 16 0Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.y29zmn0-m {
  d: path("M5 20 19 6");
}
</style><g class="nrj6p8qat"><path class="myt_b32pc"/><path class="y29zmn0-m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:shellfish-allergy-outline-regular"} {...others} />);
}

export default Component;
