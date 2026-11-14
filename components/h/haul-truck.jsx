import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ajb3hepos {
  d: path("M14.5 16.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.iuo_ek16b {
  d: path("m3 13.5l-.5-5L12 4l1 5Zm13 0v-6h2.75L21.5 11v2.5m-19 0h19M4 16.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="iuo_ek16b"/><path class="ajb3hepos"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:haul-truck"} {...others} />);
}

export default Component;
