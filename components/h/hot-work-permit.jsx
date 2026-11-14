import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.txkd449zr {
  d: path("M13.171 21.5H4v-19h9l5 5v.229");
}

.u57fmfbgr {
  d: path("M13 2.5v5h5M7.5 11h7m-7 4H11m7.25-2.25c.5 1.75 3.25 3 3.25 5.5a3.25 3.25 0 0 1-6.5 0c0-1.25.75-2.25 1.5-2.75q0 1.125.75 1.5c0-1.5.25-3 1-4.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="txkd449zr"/><path class="u57fmfbgr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:hot-work-permit"} {...others} />);
}

export default Component;
