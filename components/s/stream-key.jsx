import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n7idoylhh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 9a3 3 0 1 0 6 0a3 3 0 1 0-6 0m5.25 2.25l9.25 9.25m-2-2l-1.75 1.75M16 16l-1.75 1.75M3.804 12a6 6 0 0 1 0-6M6 3.804a6 6 0 0 1 6 0");
}
</style><path class="n7idoylhh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:stream-key"} {...others} />);
}

export default Component;
