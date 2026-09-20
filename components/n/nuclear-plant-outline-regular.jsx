import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dj0q8oblb {
  d: path("M12 2a2.5 2.5 0 0 1 0 5");
}

.morp7_b7k {
  d: path("M12 12a2.5 2.5 0 0 1 0 -5");
}

.nk2bhslfp {
  d: path("m7 20 2 -2V9h6v9l2 2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="nk2bhslfp"/><path class="morp7_b7k"/><path class="dj0q8oblb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:nuclear-plant-outline-regular"} {...others} />);
}

export default Component;
