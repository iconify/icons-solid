import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v5b567g-l {
  d: path("M4 10V7.5A1.5 1.5 0 0 1 5.5 6h13A1.5 1.5 0 0 1 20 7.5V10M9.5 6v12m5-12v12");
}

.wle-f0bmt {
  d: path("M2.5 11.5a1.5 1.5 0 0 1 3 0v2h13v-2a1.5 1.5 0 0 1 3 0V18h-19Z");
}
</style><g class="ulnmmdpxh"><path class="wle-f0bmt"/><path class="v5b567g-l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:sofa-three-seat"} {...others} />);
}

export default Component;
