import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c7xcpitsy {
  d: path("M8 19V6.5a4 4 0 0 1 4-4h4V5M5.5 21.5l1-2.5h3l1 2.5Z");
}

.iifbidgrj {
  d: path("m16 5l2.75 2.5h-5.5Zm-2.25 2.5h4.5l-1 6h-2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c7xcpitsy"/><path class="iifbidgrj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:lamp-post-classic"} {...others} />);
}

export default Component;
