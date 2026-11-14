import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mli12z8_s {
  d: path("M11 6q-3 4-2.5 11m9.5-3v3");
}

.q1957uivs {
  d: path("M3 17v-2c0-5.5 3.5-9 8-9s7 3.5 7 8l3.5 1.5V17Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q1957uivs"/><path class="mli12z8_s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:baseball-cap-sport"} {...others} />);
}

export default Component;
