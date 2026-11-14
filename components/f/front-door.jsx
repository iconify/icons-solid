import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sb7ngsb2s {
  d: path("M4 21.5v-19h16v19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ym6cw_m8e {
  d: path("M7 5.5h6.5v5H7Zm0 8h6.5v5H7Zm9.75-1.5h.01");
}
</style><g class="ulnmmdpxh"><path class="sb7ngsb2s"/><path class="ym6cw_m8e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:front-door"} {...others} />);
}

export default Component;
