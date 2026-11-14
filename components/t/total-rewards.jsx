import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aqd-eiw9c {
  d: path("M3 10h18v10.5H3Zm0 0V8.5C3 5.75 6.5 4 12 4s9 1.75 9 4.5V10");
}

.m1gv3-b2c {
  d: path("M10.5 8.5h3v4h-3Zm-7.5 6h6m6 0h6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="aqd-eiw9c"/><path class="m1gv3-b2c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:total-rewards"} {...others} />);
}

export default Component;
