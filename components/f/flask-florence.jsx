import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p4mexcbhg {
  d: path("M5.25 16Q8.5 14 12 16t6.75 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xzlgw2-6z {
  d: path("M10 3v4.75a7 7 0 1 0 4 0V3M8.75 3h6.5");
}
</style><g class="ulnmmdpxh"><path class="xzlgw2-6z"/><path class="p4mexcbhg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:flask-florence"} {...others} />);
}

export default Component;
