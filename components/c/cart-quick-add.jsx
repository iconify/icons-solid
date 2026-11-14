import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c_nas2blv {
  d: path("M2.5 2.5h2L7.75 17H18.5L21 4.25H5.25m2 16.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m7 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uslfhsbzp {
  d: path("m15 5.75l-4.75 5.5h4.5L11 15.5");
}
</style><g class="hntgybcog"><path class="c_nas2blv"/><path class="uslfhsbzp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cart-quick-add"} {...others} />);
}

export default Component;
