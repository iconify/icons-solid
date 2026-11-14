import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dwwgy-e6i {
  d: path("m9.5 9.5l-5 5l5 5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vxh-ftnjv {
  d: path("M19.5 4.5V11a3.5 3.5 0 0 1-3.5 3.5H4.5");
}
</style><g class="ulnmmdpxh"><path class="vxh-ftnjv"/><path class="dwwgy-e6i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:corner-down-left"} {...others} />);
}

export default Component;
