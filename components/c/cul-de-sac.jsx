import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uj6zl1b_j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 21.5v-7.75a6 6 0 1 1 6 0v7.75m-3-6v2m0 2v2M2.5 18l2.25-2L7 18v3.5H2.5zM17 18l2.25-2l2.25 2v3.5H17z");
}
</style><path class="uj6zl1b_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cul-de-sac"} {...others} />);
}

export default Component;
