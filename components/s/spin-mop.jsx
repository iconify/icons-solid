import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kdmwsxdku {
  d: path("M8.5 18.5q4-3 8 0");
}

.loiwzx-lp {
  d: path("m4 10.5l1.75 9.25a2 2 0 0 0 2 1.75h8.5a2 2 0 0 0 2-1.75L20 10.5m-17.5 0h19m-5.5-8l-3.5 14");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="loiwzx-lp"/><path class="kdmwsxdku"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:spin-mop"} {...others} />);
}

export default Component;
