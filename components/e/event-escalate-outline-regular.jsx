import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.azs8m69dm {
  d: path("m14 5 -2.5 2.5H14L11.5 10");
}

.d5czi6rdr {
  d: path("M3 4a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.kgpu6-15k {
  d: path("m10 15.5 2 -2 2 2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rfdwl-jei {
  d: path("m10 18.5 2 -2 2 2");
}
</style><g class="nrj6p8qat"><path class="d5czi6rdr"/><path class="azs8m69dm"/><path class="kgpu6-15k"/><path class="rfdwl-jei"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:event-escalate-outline-regular"} {...others} />);
}

export default Component;
