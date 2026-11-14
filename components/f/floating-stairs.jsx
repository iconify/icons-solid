import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ifq_ssbsd {
  d: path("M3 15.5h5.5v2.75H3ZM9.25 10h5.5v2.75h-5.5Zm6.25-5.5h6v2.75h-6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zox78x7fg {
  d: path("M21.5 2.5v19h-19");
}
</style><g class="ulnmmdpxh"><path class="zox78x7fg"/><path class="ifq_ssbsd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:floating-stairs"} {...others} />);
}

export default Component;
