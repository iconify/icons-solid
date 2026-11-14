import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a9r51ybmm {
  d: path("M2.5 13C4 16.5 8 17.5 12 17.5s8-1 9.5-4.5");
}

.m9ap1z2di {
  d: path("m7.75 17l.5-8.5C8.5 6.5 10 6 11 7l1 1l1-1c1-1 2.5-.5 2.75 1.5l.5 8.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="a9r51ybmm"/><path class="m9ap1z2di"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:genre-country"} {...others} />);
}

export default Component;
