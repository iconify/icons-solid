import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r_y_pvbhc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.061 3.561l1.128 1.128a1.5 1.5 0 0 1 0 2.122l-1.128 1.128a1.5 1.5 0 0 1-2.122 0L9.811 6.811a1.5 1.5 0 0 1 0-2.122l1.128-1.128a1.5 1.5 0 0 1 2.122 0m-6.25 6.25l1.128 1.128a1.5 1.5 0 0 1 0 2.122l-1.128 1.128a1.5 1.5 0 0 1-2.122 0l-1.128-1.128a1.5 1.5 0 0 1 0-2.122l1.128-1.128a1.5 1.5 0 0 1 2.122 0m12.5 0l1.128 1.128a1.5 1.5 0 0 1 0 2.122l-1.128 1.128a1.5 1.5 0 0 1-2.122 0l-1.128-1.128a1.5 1.5 0 0 1 0-2.122l1.128-1.128a1.5 1.5 0 0 1 2.122 0m-4.066 6.994l.675 1.447a1.5 1.5 0 0 1-.725 1.993l-1.447.675a1.5 1.5 0 0 1-1.993-.725l-.675-1.447a1.5 1.5 0 0 1 .725-1.993l1.447-.675a1.5 1.5 0 0 1 1.993.725");
}
</style><path class="r_y_pvbhc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:component-broken"} {...others} />);
}

export default Component;
