import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hy_bpejoi {
  d: path("M13.75 2.5v3c0 2.75-3.5 2.75-3.5.5");
}

.kbd6tvbsv {
  d: path("m5 11.5l7-3.75L19 13");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zxntmzboh {
  d: path("M4 11.5L19.5 13L17 21.5H7Z");
}
</style><g class="ulnmmdpxh"><path class="hy_bpejoi"/><path class="kbd6tvbsv"/><path class="zxntmzboh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:concrete-bucket"} {...others} />);
}

export default Component;
