import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v7n_je64o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 9v10a1.5 1.5 0 0 1-1.5 1.5A1.5 1.5 0 0 1 3 19V9zV3.5h14.5V18a2.5 2.5 0 0 1-2.5 2.5H4.5M9 7.5h8.5M9 12h3m2.75 0h2.75M9 16.5h3m2.75 0h2.75");
}
</style><path class="v7n_je64o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:classified-ads"} {...others} />);
}

export default Component;
