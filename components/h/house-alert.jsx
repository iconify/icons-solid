import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.chkh74bjc {
  d: path("M15.16 20H4v-9.5l8-7l8 7v1.44");
}

.tl13t1q5l {
  d: path("M9.5 20v-4a2.5 2.5 0 0 1 5 0v4m3.5-5.25v3.5M18 21h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="chkh74bjc"/><path class="tl13t1q5l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:house-alert"} {...others} />);
}

export default Component;
