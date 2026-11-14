import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hc993nbmz {
  d: path("M11.2 16H8L2.5 9.5L8 3h12v7.4M8 9.5h.01m5.99 7h8V22h-8Z");
}

.p-bfwnbwt {
  d: path("M15.75 16.5V15a2.25 2.25 0 0 1 4.5 0v1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hc993nbmz"/><path class="p-bfwnbwt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:git-tag-protected"} {...others} />);
}

export default Component;
