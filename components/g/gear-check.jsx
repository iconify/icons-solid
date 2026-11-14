import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lf4p66bmt {
  d: path("M7.5 9.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM14.75 18l2 2L21 15.75");
}

.rj-kgvs0b {
  d: path("m8.25 4.606l.135-1.798h1.73l.135 1.798l1.577.654l1.366-1.177l1.224 1.224l-1.177 1.366l.654 1.577l1.798.135v1.73l-1.798.135l-.654 1.577l1.177 1.366l-1.224 1.224l-1.366-1.177l-1.577.654l-.135 1.798h-1.73l-.135-1.798l-1.577-.654l-1.366 1.177l-1.224-1.224l1.177-1.366l-.654-1.577l-1.798-.135v-1.73l1.798-.135l.654-1.577l-1.177-1.366l1.224-1.224L6.673 5.26Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rj-kgvs0b"/><path class="lf4p66bmt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:gear-check"} {...others} />);
}

export default Component;
