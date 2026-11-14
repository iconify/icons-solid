import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hdrbbrt7r {
  d: path("M5.5 19.5v-8.25h11v.45M5.5 14h9.7m-9.7 2.75h9.7M18 14.5V18m0 3h.01");
}

.t1iw5gbrc {
  d: path("M15.244 19.5H2.5v-10L11 2.25l8.5 7.25v2.156");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="t1iw5gbrc"/><path class="hdrbbrt7r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:garage-door-alert"} {...others} />);
}

export default Component;
