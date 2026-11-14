import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j_psw1y4g {
  d: path("M3 3h18v18H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zn67o8bkj {
  d: path("m10 8.25l2-2l2 2m-4 7.5l2 2l2-2M8.25 10l-2 2l2 2m7.5-4l2 2l-2 2");
}
</style><g class="ulnmmdpxh"><path class="j_psw1y4g"/><path class="zn67o8bkj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:dance-pad"} {...others} />);
}

export default Component;
