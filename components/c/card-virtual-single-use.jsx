import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p4h-4p6kc {
  d: path("M15.2 19H2.5V5h19v14h-.2M2.5 9.5h18.1m-18.1 0h18.1M6 15h2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yjgya_t8z {
  d: path("M16.75 16.5L18.5 15v6");
}
</style><g class="ulnmmdpxh"><path class="p4h-4p6kc"/><path class="yjgya_t8z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:card-virtual-single-use"} {...others} />);
}

export default Component;
