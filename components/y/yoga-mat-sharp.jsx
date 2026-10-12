import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuatcab0b {
  d: path("M16.25 17h-13v-3h8.76a4.5 4.5 0 1 1 4.24 3Z");
}

.g6yrz3b3f {
  d: path("M16.25 10.5a2 2 0 1 1-2 2");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="cuatcab0b"/><path class="g6yrz3b3f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:yoga-mat-sharp"} {...others} />);
}

export default Component;
