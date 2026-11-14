import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ik85u6u1n {
  d: path("m3 21.5l5-15l3.57 10.709m.759 2.277L13 21.5");
}

.qw_i9zbhr {
  d: path("M6 12.5h4L4.5 17h7M5.75 4A3 3 0 0 0 5 7m5.25-3A3 3 0 0 1 11 7m3.75 11l2 2L21 15.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ik85u6u1n"/><path class="qw_i9zbhr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cell-tower-check"} {...others} />);
}

export default Component;
