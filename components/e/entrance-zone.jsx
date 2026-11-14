import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m241-3zhq {
  d: path("m11 9l3 3l-3 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x1ryrk17e {
  d: path("M2.5 6.5v-2a2 2 0 0 1 2-2h2m11 0h2a2 2 0 0 1 2 2v2m0 11v2a2 2 0 0 1-2 2h-2m-11 0h-2a2 2 0 0 1-2-2v-2m8-15h3m-3 19h3m-11-11v3m19-3v3M14 7h2a1.5 1.5 0 0 1 1.5 1.5v7A1.5 1.5 0 0 1 16 17h-2m-7.5-5H14");
}
</style><g class="ulnmmdpxh"><path class="x1ryrk17e"/><path class="m241-3zhq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:entrance-zone"} {...others} />);
}

export default Component;
