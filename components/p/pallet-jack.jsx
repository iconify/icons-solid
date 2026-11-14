import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t1i_qqbnx {
  d: path("M8 9v9h13.5M8 9L4 2.5");
}

.wmx_e_0no {
  d: path("M6 20a2 2 0 1 0 4 0a2 2 0 1 0-4 0m6.5-6.5h9m-8.5 0V18m4-4.5V18m4-4.5V18");
}
</style><g class="hntgybcog"><path class="t1i_qqbnx"/><path class="wmx_e_0no"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:pallet-jack"} {...others} />);
}

export default Component;
