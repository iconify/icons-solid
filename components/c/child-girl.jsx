import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fae2z1dip {
  d: path("m12 6.5l-2.5-4l-1.25 2.25Zm0 0l2.5-4l1.25 2.25Zm-7.5 15C4.5 19 7.75 17 12 17s7.5 2 7.5 4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zyv6rtbrm {
  d: path("M8.25 10.25a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="zyv6rtbrm"/><path class="fae2z1dip"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:child-girl"} {...others} />);
}

export default Component;
