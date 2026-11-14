import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hyku-5b5n {
  d: path("M2.5 6h19v12h-19ZM6 12h5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xrq70cbzc {
  d: path("m15 10.75l2 2l2-2");
}
</style><g class="ulnmmdpxh"><path class="hyku-5b5n"/><path class="xrq70cbzc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:dropdown"} {...others} />);
}

export default Component;
