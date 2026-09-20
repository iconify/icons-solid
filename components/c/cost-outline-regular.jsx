import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hspl6tj_s {
  d: path("M4 7a8 3 0 0 1 16 0v10a8 3 0 0 1 -16 0Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o53n0ib2h {
  d: path("M4 12a8 3 0 0 0 16 0");
}

.pmbwi9b0n {
  d: path("M4 7a8 3 0 0 0 16 0");
}
</style><g class="nrj6p8qat"><path class="hspl6tj_s"/><path class="pmbwi9b0n"/><path class="o53n0ib2h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:cost-outline-regular"} {...others} />);
}

export default Component;
