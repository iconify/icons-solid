import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j9hpoqy2a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14 6a6 6 0 0 0 0 12Zm0 0a6 6 0 0 1 0 12a8 8 0 0 0 0-12M3 12h2.25m2.5-6.25l-1.5-1.5m1.5 14l-1.5 1.5");
}
</style><path class="j9hpoqy2a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:day-night-cycle"} {...others} />);
}

export default Component;
