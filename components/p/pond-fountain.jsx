import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.blfaxpbqo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 17.5a9.5 3.5 0 1 0 19 0a9.5 3.5 0 1 0-19 0m9.5 0V4M9.25 5.5Q6 6 5 11.5m9.75-6Q18 6 19 11.5");
}
</style><path class="blfaxpbqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:pond-fountain"} {...others} />);
}

export default Component;
