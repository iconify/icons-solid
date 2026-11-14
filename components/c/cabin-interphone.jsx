import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cg1z511gt {
  d: path("M8 17q1-1.5 2 0t2 0t2 0t2 0");
}

.g6vte_bss {
  d: path("M3 9.5C3 6 6.5 4 12 4s9 2 9 5.5l-2.5 3H16L15 10H9l-1 2.5H5.5Zm1.5 3h15V21h-15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g6vte_bss"/><path class="cg1z511gt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cabin-interphone"} {...others} />);
}

export default Component;
