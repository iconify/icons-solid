import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.apa49488o {
  d: path("M8 21.5V17h3v.8m0 .4v3.3m3.75-3.5l2 2L21 15.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wc5_2v24i {
  d: path("M14.3 21.5H3.5v-19h12v12.3M7.25 7h.01m4.49 0h.01m-4.51 4.5h.01m4.49 0h.01");
}
</style><g class="ulnmmdpxh"><path class="wc5_2v24i"/><path class="apa49488o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:hotel-check"} {...others} />);
}

export default Component;
