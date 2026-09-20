import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gte-olbep {
  d: path("M10 8v3.5");
}

.jz3tcofhe {
  d: path("M14 8v3.5");
}

.ktxx-etqf {
  d: path("M18 8v3.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p4maaes8e {
  d: path("M6 8v3.5");
}

.qvq8nib-l {
  d: path("M2 12a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4 4 4 0 0 1 -4 4H6a4 4 0 0 1 -4 -4");
}
</style><g class="nrj6p8qat"><path class="qvq8nib-l"/><path class="p4maaes8e"/><path class="gte-olbep"/><path class="jz3tcofhe"/><path class="ktxx-etqf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:ruler-outline-regular"} {...others} />);
}

export default Component;
