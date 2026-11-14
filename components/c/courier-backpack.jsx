import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bnghffbam {
  d: path("M4.5 21.5V10a5 5 0 0 1 5-5h5a5 5 0 0 1 5 5v11.5ZM9.5 5V4A1.5 1.5 0 0 1 11 2.5h2A1.5 1.5 0 0 1 14.5 4v1");
}

.gmexwbb9r {
  d: path("M7.5 21.5v-7h9v7m-7-7v-4h5v4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="bnghffbam"/><path class="gmexwbb9r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:courier-backpack"} {...others} />);
}

export default Component;
