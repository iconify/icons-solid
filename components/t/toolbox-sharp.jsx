import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b-44mubnr {
  d: path("M10.25 11.25h3.5v3.5h-3.5z");
}

.b1khcmb7j {
  d: path("M2.75 8.25h18.5v12.5H2.75zm5.75 0v-3.5h7v3.5M2.75 13h7.5m3.5 0h7.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="b1khcmb7j"/><path class="b-44mubnr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:toolbox-sharp"} {...others} />);
}

export default Component;
