import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o7qy92dpn {
  d: path("M7 3v2M3 5h8M9 5q0 7.5-6 9m1-5c1 3 3.5 4.5 7 5");
}

.xtrn4ubxr {
  stroke-opacity: 0.4;
  d: path("m13 21l4-10l4 10m-6-5h4");
}
</style><g class="nrj6p8qat"><path class="xtrn4ubxr"/><path class="o7qy92dpn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:translate-duocolor"} {...others} />);
}

export default Component;
