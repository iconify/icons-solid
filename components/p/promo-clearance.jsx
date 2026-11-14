import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nf99v2b4s {
  d: path("M2.5 2.5H9l7.5 7.5l-6.5 6.5L2.5 9Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v6_g-8bua {
  d: path("M5 6.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm13 8v7m-3-3l3 3l3-3");
}
</style><g class="ulnmmdpxh"><path class="nf99v2b4s"/><path class="v6_g-8bua"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:promo-clearance"} {...others} />);
}

export default Component;
