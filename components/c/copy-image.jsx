import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ail0y-9zd {
  d: path("M8.5 8.5h12v12h-12Z");
}

.rsf3l3b-q {
  d: path("M4 14.5V6a2.5 2.5 0 0 1 2.5-2.5h8m-6 15L12 15l3.5 3.5m1-6h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ail0y-9zd"/><path class="rsf3l3b-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:copy-image"} {...others} />);
}

export default Component;
