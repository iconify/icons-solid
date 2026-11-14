import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bd0vsfb7q {
  d: path("M2.5 8a2.375 2.375 0 0 0 4.75 0A2.375 2.375 0 0 0 12 8a2.375 2.375 0 0 0 4.75 0a2.375 2.375 0 0 0 4.75 0m-13 12.5v-6h7v6m-3.5-6v6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uit4pdbii {
  d: path("M2.5 8L4 3.5h16L21.5 8M4 10v10.5h16V10");
}
</style><g class="hntgybcog"><path class="uit4pdbii"/><path class="bd0vsfb7q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:shopping-mall"} {...others} />);
}

export default Component;
