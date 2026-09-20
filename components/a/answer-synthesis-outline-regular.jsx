import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b7nacdcee {
  d: path("M3 6h6");
}

.d_scobift {
  d: path("M3 18h6");
}

.d223d_x9q {
  d: path("M3 12h6");
}

.f2m4wubik {
  d: path("M13 12h8");
}

.k2jd848hu {
  d: path("m9 16 4 -4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ymrjh3b_x {
  d: path("m9 8 4 4");
}
</style><g class="nrj6p8qat"><path class="b7nacdcee"/><path class="d223d_x9q"/><path class="d_scobift"/><path class="ymrjh3b_x"/><path class="k2jd848hu"/><path class="f2m4wubik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:answer-synthesis-outline-regular"} {...others} />);
}

export default Component;
