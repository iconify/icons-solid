import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gq_90m-1n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 8h14v4.5a5 5 0 0 1-5 5h-4a5 5 0 0 1-5-5Zm2-5.5V8m10-5.5V8m-5 9.5v4m1.5-19l-3 3h3L11 8");
}
</style><path class="gq_90m-1n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:electrical-fault"} {...others} />);
}

export default Component;
