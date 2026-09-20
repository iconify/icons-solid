import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.khupvdbel {
  d: path("M20 4H10v16");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.x7qdjyb5k {
  d: path("m5 15 5 5 5 -5");
}
</style><g class="nrj6p8qat"><path class="khupvdbel"/><path class="x7qdjyb5k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:corner-left-down-outline-regular"} {...others} />);
}

export default Component;
