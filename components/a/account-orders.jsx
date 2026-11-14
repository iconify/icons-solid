import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k4p83wb4v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 13h11.5a1.75 1.75 0 0 1 1.75 1.75v5a1.75 1.75 0 0 1-1.75 1.75H6.25a1.75 1.75 0 0 1-1.75-1.75v-5A1.75 1.75 0 0 1 6.25 13m1.25 0V4.5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2V13m-12 0L2.25 9.5M19.5 13l2.25-3.5m-11.5-3.25h.01m1.74 0h2m-3.75 3.5h.01m1.74 0h2");
}
</style><path class="k4p83wb4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:account-orders"} {...others} />);
}

export default Component;
