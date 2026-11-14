import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.scmw1ygtp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 2.5h5A3.5 3.5 0 0 1 18 6v8a3.5 3.5 0 0 1-3.5 3.5h-5A3.5 3.5 0 0 1 6 14V6a3.5 3.5 0 0 1 3.5-3.5M4.5 21h15M9 9l3-3m-2.5 7.5L15 8");
}
</style><path class="scmw1ygtp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bathroom-mirror"} {...others} />);
}

export default Component;
