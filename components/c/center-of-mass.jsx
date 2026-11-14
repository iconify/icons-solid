import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q289v3baw {
  d: path("M2.5 10.5L16 3l4 4.5l-14 7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uo93khfgd {
  d: path("m12 11.5l4 8.5H8Zm0-3h.01");
}
</style><g class="ulnmmdpxh"><path class="q289v3baw"/><path class="uo93khfgd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:center-of-mass"} {...others} />);
}

export default Component;
