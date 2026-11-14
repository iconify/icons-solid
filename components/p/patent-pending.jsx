import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuno8mtsu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 13.75a6.5 6.5 0 0 1-1-6.5m2.25-3a6.5 6.5 0 0 1 7.5 0m2.25 3a6.5 6.5 0 0 1-1 6.5M9.5 17.5h5m-4 3h3");
}
</style><path class="cuno8mtsu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:patent-pending"} {...others} />);
}

export default Component;
