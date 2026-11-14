import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.femaqu8cj {
  d: path("M3 3a14.5 14.5 0 0 1 3.75.5m2.75 1a14.5 14.5 0 0 1 3.25 2.25m2 2.25a14.5 14.5 0 0 1 1.75 3.25m.75 3a14.5 14.5 0 0 1 .25 2.25");
}

.l9corfx1v {
  d: path("m15 15l2.5 2.5L20 15m-7.5 6h9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="femaqu8cj"/><path class="l9corfx1v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:arrival-route"} {...others} />);
}

export default Component;
