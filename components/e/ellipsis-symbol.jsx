import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v3j-b1bxs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 17a1 1 0 1 0 2 0a1 1 0 1 0-2 0m6.5 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0m6.5 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0");
}
</style><path class="v3j-b1bxs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:ellipsis-symbol"} {...others} />);
}

export default Component;
