import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xhi-_vbse {
  d: path("M3 5v14.5h18V14H3");
}

.zbtg98pkk {
  d: path("M6 9.5h15V14H6Z");
}
</style><g class="ulnmmdpxh"><path class="xhi-_vbse"/><path class="zbtg98pkk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:platform-bed"} {...others} />);
}

export default Component;
