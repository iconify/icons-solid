import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vf79f0-ii {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 2.75v7.5a3.5 3.5 0 0 0 7 0v-7.5m-3.5 11v7.5M4.5 4.5c-1 1.6-1 4.4 0 6m15-6c1 1.6 1 4.4 0 6");
}
</style><path class="vf79f0-ii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:tuning-fork"} {...others} />);
}

export default Component;
