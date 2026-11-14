import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e-tqq7b4t {
  d: path("M8.5 2.5h5v4h-5ZM6 6.5h10v15H6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wj2glggjp {
  d: path("M8.75 10h4.5v7.5h-4.5Zm0 4.5h4.5m3.25-10h.01m2.99-1.75A3.5 3.5 0 0 1 19 7");
}
</style><g class="ulnmmdpxh"><path class="e-tqq7b4t"/><path class="wj2glggjp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:smart-bottle"} {...others} />);
}

export default Component;
