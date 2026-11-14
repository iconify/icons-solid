import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hs4ne2wsc {
  d: path("M11 6L8 9l3 3M4 5v8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xj7nnm-0n {
  d: path("M20 19v-5a5 5 0 0 0-5-5H8");
}
</style><g class="ulnmmdpxh"><path class="xj7nnm-0n"/><path class="hs4ne2wsc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:revert"} {...others} />);
}

export default Component;
