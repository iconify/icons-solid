import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mepevqbwl {
  d: path("m12 4 6 6a6 6 0 0 1 -12 0Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.u363cab-y {
  d: path("M5 19 19 5");
}
</style><g class="nrj6p8qat"><path class="mepevqbwl"/><path class="u363cab-y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:water-saving-outline-regular"} {...others} />);
}

export default Component;
