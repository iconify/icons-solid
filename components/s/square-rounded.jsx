import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f4ts4bc7l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 3h8m5 5v8m-5 5H8m-5-5V8m13-5a5 5 0 0 1 5 5m0 8a5 5 0 0 1-5 5m-8 0a5 5 0 0 1-5-5m0-8a5 5 0 0 1 5-5");
}
</style><path class="f4ts4bc7l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:square-rounded"} {...others} />);
}

export default Component;
