import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b5q2rwb2w {
  d: path("M10.5 15a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm-2-6V5.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vcuqztv3m {
  d: path("M2.5 9h19v12h-19ZM5 6.25l6.5-2l-.75-2l-6.5 2Z");
}
</style><g class="ulnmmdpxh"><path class="vcuqztv3m"/><path class="b5q2rwb2w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:built-in-flash"} {...others} />);
}

export default Component;
