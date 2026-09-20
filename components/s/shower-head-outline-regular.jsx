import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g7c6_g9qq {
  d: path("M9 12v3");
}

.h1h08f6go {
  d: path("M15 12v3");
}

.hmv-0nk4s {
  d: path("M12 12v5");
}

.ixnx5hkex {
  d: path("M6 6h12l-3 3H9Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.yazo7scbq {
  d: path("M12 3v3");
}
</style><g class="nrj6p8qat"><path class="ixnx5hkex"/><path class="yazo7scbq"/><path class="g7c6_g9qq"/><path class="hmv-0nk4s"/><path class="h1h08f6go"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:shower-head-outline-regular"} {...others} />);
}

export default Component;
