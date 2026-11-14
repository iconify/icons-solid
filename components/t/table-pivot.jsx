import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bciwdmauy {
  d: path("M11.5 11.5A5.5 5.5 0 0 1 17 17");
}

.qm9w97bhy {
  d: path("M15.25 15.25L17 17l1.75-1.75");
}

.u4r_v-b5g {
  d: path("M2.5 2.5h19v19h-19Zm0 5.5h19M8 2.5v19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="u4r_v-b5g"/><path class="bciwdmauy"/><path class="qm9w97bhy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:table-pivot"} {...others} />);
}

export default Component;
