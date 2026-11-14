import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.edm7iq6px {
  d: path("M6 13.25q1.5-.75 3 0t3 0M9.5 16.5q1.5-.75 3 0t3 0m5.25-6.75V3.5m0 6.25L18 5");
}

.mmlspch7v {
  d: path("M2.5 14.5a8.5 5.5 0 1 0 17 0a8.5 5.5 0 1 0-17 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mmlspch7v"/><path class="edm7iq6px"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:farm-pond"} {...others} />);
}

export default Component;
