import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b74h_3bcr {
  d: path("M2.5 16.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm11 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm-3 0h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zy_x_gbuy {
  d: path("M16 12.75V2.5h3v10.25M6.5 16.5v-2.75m0 2.75l2.25 1.25M6.5 16.5l-2.25 1.25M17.5 16.5v-2.75m0 2.75l2.25 1.25M17.5 16.5l-2.25 1.25");
}
</style><g class="ulnmmdpxh"><path class="b74h_3bcr"/><path class="zy_x_gbuy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:combined-cycle"} {...others} />);
}

export default Component;
