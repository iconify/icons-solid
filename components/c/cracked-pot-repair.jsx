import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dmjiy3b0y {
  d: path("M7 4h10l-1 3c4 2 4.5 10 1 13.5H7C3.5 17 4 9 8 7Z");
}

.iy4xm5bsk {
  d: path("m11.5 7l2 4l-3 3.5l2.5 6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dmjiy3b0y"/><path class="iy4xm5bsk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cracked-pot-repair"} {...others} />);
}

export default Component;
