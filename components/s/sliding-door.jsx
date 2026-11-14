import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f_h2inbzr {
  d: path("M3.5 3.5h17v17h-17Zm8.5 0v17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wy1ae8b5k {
  d: path("m7.5 10l2 2l-2 2m9-4l-2 2l2 2");
}
</style><g class="ulnmmdpxh"><path class="f_h2inbzr"/><path class="wy1ae8b5k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:sliding-door"} {...others} />);
}

export default Component;
