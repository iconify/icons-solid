import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b15_tib7k {
  d: path("M17.5 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.gfdpeof0d {
  d: path("M9 7v10");
}

.murw5tb-p {
  d: path("M2 9a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.n3p0zmbop {
  d: path("M11 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.okg0-qwlz {
  d: path("M4.5 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.y_uork5-p {
  d: path("M15 7v10");
}
</style><g class="nrj6p8qat"><path class="murw5tb-p"/><path class="gfdpeof0d"/><path class="y_uork5-p"/><path class="okg0-qwlz"/><path class="n3p0zmbop"/><path class="b15_tib7k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:watercolour-outline-regular"} {...others} />);
}

export default Component;
