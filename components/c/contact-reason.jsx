import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m-500dbxc {
  d: path("M14.5 5.25L16.25 7L18 5.25M6.5 16.75H14");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uopgd_b0p {
  d: path("M3 2.5h18v7H3Zm0 9.75h18v9.25H3Z");
}
</style><g class="ulnmmdpxh"><path class="uopgd_b0p"/><path class="m-500dbxc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:contact-reason"} {...others} />);
}

export default Component;
