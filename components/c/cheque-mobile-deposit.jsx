import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dtq-hy7hv {
  d: path("M2 5h20v14H2Z");
}

.rfpnalb7x {
  d: path("M11.5 13.5c.75-.75 1.25.5 2-.25c.5-.5 1 .5 2 .25M4.25 12h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wmo64rr1v {
  d: path("M6.5 7.75H18v8.5H6.5ZM9 10.5h3.5");
}
</style><g class="ulnmmdpxh"><path class="dtq-hy7hv"/><path class="wmo64rr1v"/><path class="rfpnalb7x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cheque-mobile-deposit"} {...others} />);
}

export default Component;
