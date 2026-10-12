import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i5js6-u1m {
  d: path("m12.95 3.06l5.1 1.63L19 5l-.95.31l-5.1 1.63l-.95.31l-.95-.31l-5.1-1.63L5 5l.95-.31l5.1-1.63l.95-.31zM19 5v3.5");
}

.mtsw3obml {
  d: path("M5 21.25h15v-1c0-2-3.6-3.25-8-3.25s-8 1.25-8 3.25v1z");
}

.o1ytxaclq {
  cx: 12px;
  cy: 12.25px;
  r: 2.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="i5js6-u1m"/><circle class="o1ytxaclq"/><path class="mtsw3obml"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:student-sharp"} {...others} />);
}

export default Component;
