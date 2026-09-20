import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.atw46iq_d {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m11 11 4 -4 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.c3f76m_3y {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m5 11 4 -4 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hx31bvbvo {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 11h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.k187sabpz {
  d: path("M2 11h20");
}

.kpavcn10r {
  d: path("M21 11a9 9 0 0 1 -18 0");
}

.krprq0btg {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M21 11a9 9 0 0 1 -18 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.n5cv_rbxc {
  d: path("m5 11 4 -4 4 4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o7aygz06s {
  d: path("m11 11 4 -4 4 4");
}
</style><g class="nrj6p8qat"><path class="hx31bvbvo"/><path class="krprq0btg"/><path class="c3f76m_3y"/><path class="atw46iq_d"/><path class="k187sabpz"/><path class="kpavcn10r"/><path class="n5cv_rbxc"/><path class="o7aygz06s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:salad-duotone-regular"} {...others} />);
}

export default Component;
