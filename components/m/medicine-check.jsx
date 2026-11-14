import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uvfuh3b6a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 4h12a3.5 3.5 0 0 1 3.5 3.5A3.5 3.5 0 0 1 18 11H6a3.5 3.5 0 0 1-3.5-3.5A3.5 3.5 0 0 1 6 4m6 0v7m2.75 7l2 2L21 15.75");
}
</style><path class="uvfuh3b6a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:medicine-check"} {...others} />);
}

export default Component;
