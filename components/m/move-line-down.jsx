import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.anzexhb4y {
  d: path("M15.5 16.5L18 19l2.5-2.5");
}

.b1iz5acmw {
  d: path("M2.5 5h19m-19 14H13M2.5 12h13a2.5 2.5 0 0 1 2.5 2.5V19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b1iz5acmw"/><path class="anzexhb4y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:move-line-down"} {...others} />);
}

export default Component;
