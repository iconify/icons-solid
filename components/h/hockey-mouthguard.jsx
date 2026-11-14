import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cxrczhbnp {
  d: path("M6.25 4.25v7a5.75 5.75 0 0 0 11.5 0v-7");
}

.r2y6rxbxt {
  d: path("M3.5 4.25v7a8.5 8.5 0 0 0 17 0v-7H15v7a3 3 0 0 1-6 0v-7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r2y6rxbxt"/><path class="cxrczhbnp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:hockey-mouthguard"} {...others} />);
}

export default Component;
