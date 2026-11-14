import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u_kudcbtr {
  d: path("M9.75 7.75L12 5.5l2.25 2.25m-4.5 4.5L12 14.5l2.25-2.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z19dg1btv {
  d: path("M4 2.5h16v15H4Zm8 15v4m0-16v9");
}
</style><g class="ulnmmdpxh"><path class="z19dg1btv"/><path class="u_kudcbtr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:height-limit-sign"} {...others} />);
}

export default Component;
