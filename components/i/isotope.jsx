import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bh8px4ugs {
  d: path("M16.75 3.75a9.5 3.75 120 1 1-9.5 16.5a9.5 3.75 120 1 1 9.5-16.5ZM12 12h.01");
}

.h_die1bht {
  d: path("M2.5 12a9.5 3.75 0 1 0 19 0a9.5 3.75 0 1 0-19 0Z");
}

.rs0zblbem {
  d: path("M7.25 3.75a9.5 3.75 60 1 1 9.5 16.5a9.5 3.75 60 1 1-9.5-16.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h_die1bht"/><path class="rs0zblbem"/><path class="bh8px4ugs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:isotope"} {...others} />);
}

export default Component;
