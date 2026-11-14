import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g6ulkabjn {
  d: path("M2.5 2.5h19v19h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zpjwrce4n {
  d: path("M7.5 6.5H17v5H7.5Zm0 .75l-2.25-1v5.5l2.25-1Zm6 4.25v4h5.25m0-2.25v4.5");
}
</style><g class="ulnmmdpxh"><path class="g6ulkabjn"/><path class="zpjwrce4n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cctv-notice"} {...others} />);
}

export default Component;
