import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nx07kybqp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h19M4 3.5v17h3c.5-3.5 1.5-5 3-6C7 12 6 8 6.25 3.5M20 3.5v17h-3c-.5-3.5-1.5-5-3-6c3-2.5 4-6.5 3.75-11");
}
</style><path class="nx07kybqp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:stage-curtain"} {...others} />);
}

export default Component;
