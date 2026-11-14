import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v_974cc1l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 3.5l2 4.25l2.75-.5l-.5 2.75l4.25 2l-4.25 2l.5 2.75l-2.75-.5l-2 4.25l-2-4.25l-2.75.5l.5-2.75l-4.25-2l4.25-2l-.5-2.75l2.75.5Zm0 8.5h.01");
}
</style><path class="v_974cc1l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:e-mc2"} {...others} />);
}

export default Component;
