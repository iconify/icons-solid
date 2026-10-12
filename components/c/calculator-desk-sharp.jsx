import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f7neuybxg {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 12h.01M15 12h.01M9 17h.01M15 17h.01");
}

.rbostdcxq {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 2.75h14v18.5H5zM8 6.5h8");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="rbostdcxq"/><path class="f7neuybxg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:calculator-desk-sharp"} {...others} />);
}

export default Component;
