import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.akm88w1ho {
  d: path("M2 8h7l4 4h9");
}

.c05571vet {
  d: path("m16 15 4 4");
}

.h8d3b4b5p {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m9 8 4 -4h9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.k04e9ubnx {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m20 15 -4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mtg72zkij {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 8h7l4 4h9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.puhwuz9ig {
  d: path("m20 15 -4 4");
}

.v_3erbqcl {
  d: path("m9 8 4 -4h9");
}

.vfj7--brx {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m16 15 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="mtg72zkij"/><path class="h8d3b4b5p"/><path class="vfj7--brx"/><path class="k04e9ubnx"/><path class="akm88w1ho"/><path class="v_3erbqcl"/><path class="c05571vet"/><path class="puhwuz9ig"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:error-path-duotone-regular"} {...others} />);
}

export default Component;
