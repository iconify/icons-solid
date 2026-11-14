import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dh2jzoboc {
  d: path("m12 2l10 10l-10 10L2 12Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uwdo46j-s {
  d: path("M9.5 15.5v-7m-1.75 1.75L9.5 8.5l1.75 1.75M14.5 8.5v7m-1.75-1.75l1.75 1.75l1.75-1.75");
}
</style><g class="ulnmmdpxh"><path class="dh2jzoboc"/><path class="uwdo46j-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:two-way-traffic-sign"} {...others} />);
}

export default Component;
