import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h-c0fcmlg {
  d: path("M9.5 6.75L7 9.5l2.5 2.75m5-5.5L17 9.5l-2.5 2.75");
}

.pycoyu21n {
  d: path("M2.5 3h19v13h-19ZM12 18.75V21m-4 0h8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pycoyu21n"/><path class="h-c0fcmlg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:ide"} {...others} />);
}

export default Component;
