import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vua_tcb7n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 13.25h15.5A1.75 1.75 0 0 1 21.5 15v1a1.75 1.75 0 0 1-1.75 1.75H4.25A1.75 1.75 0 0 1 2.5 16v-1a1.75 1.75 0 0 1 1.75-1.75m.25 0v-4m0 0q-2.25 0-2.25-3m2.25 3q2.25 0 2.25-3m5.25 7v-4m0 0q-2.25 0-2.25-3m2.25 3q2.25 0 2.25-3m5.25 7v-4m0 0q-2.25 0-2.25-3m2.25 3q2.25 0 2.25-3");
}
</style><path class="vua_tcb7n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cover-crop"} {...others} />);
}

export default Component;
