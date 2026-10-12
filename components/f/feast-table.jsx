import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gk3oxfb7d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 14.25h18.5m-17.75 0v7m17-7v7m-14.75-7a4.25 4.25 0 0 1 8.5 0M10 10V8m6.25-1.5h3.5V9a1.75 1.75 0 0 1-3.5 0ZM18 10.75v3.5");
}
</style><path class="gk3oxfb7d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:feast-table"} {...others} />);
}

export default Component;
