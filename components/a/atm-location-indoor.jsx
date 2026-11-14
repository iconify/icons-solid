import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i7ldbxb8c {
  d: path("M11.4 21.5H4v-19h16v9.7");
}

.i92xabjtz {
  d: path("M7 5h10v6H7Zm-.5 8.75h6.9m-6.65 3.5h.01m2.49 0h.01m4.99-.25h7.5v4.75h-7.5Zm1.5 0v-1.25a.75.75 0 0 1 1.5 0V17m1.5 0v-1.25a.75.75 0 0 1 1.5 0V17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="i7ldbxb8c"/><path class="i92xabjtz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:atm-location-indoor"} {...others} />);
}

export default Component;
