import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f6bvecbsp {
  d: path("M5.5 12.25q3.5-1.5 6.5 0t6.5 0");
}

.gbnbp1fvv {
  d: path("M7 2.5h10Q19 12 18.5 18q-.25 3.5-4 3.5h-5q-3.75 0-4-3.5Q5 12 7 2.5ZM6.25 6h11.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gbnbp1fvv"/><path class="f6bvecbsp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:breast-milk-bag"} {...others} />);
}

export default Component;
