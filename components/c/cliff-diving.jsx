import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m-4nu2iar {
  d: path("m17.5 14l2 2l2-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vhnh7l27e {
  d: path("M2.5 19.5V4h5v4.5H11v11m-8.5 0h19m-8-13c4 0 6.25 3.5 6 9.5");
}
</style><g class="ulnmmdpxh"><path class="vhnh7l27e"/><path class="m-4nu2iar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cliff-diving"} {...others} />);
}

export default Component;
