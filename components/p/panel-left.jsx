import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.onms97b1e {
  d: path("M17 16.5L14.5 19l2.5 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uw7ldw55n {
  d: path("M11.6 18H2.5V2.5H21v13.7M9 2.5V18m12.5 1h-7");
}
</style><g class="ulnmmdpxh"><path class="uw7ldw55n"/><path class="onms97b1e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:panel-left"} {...others} />);
}

export default Component;
