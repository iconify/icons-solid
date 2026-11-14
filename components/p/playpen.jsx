import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lvd_f6bvo {
  d: path("M9.5 17a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.p00wx09cb {
  d: path("M2.5 4.5h19v15h-19Zm4.5 0v15m5-15v7.25m5-7.25v15");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="p00wx09cb"/><path class="lvd_f6bvo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:playpen"} {...others} />);
}

export default Component;
