import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jsg7029uw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 6h8.5a5.25 5.25 0 0 1 5.25 5.25v1.5A5.25 5.25 0 0 1 16.25 18h-8.5a5.25 5.25 0 0 1-5.25-5.25v-1.5A5.25 5.25 0 0 1 7.75 6m-.5 3.25h.01m-.01 3v2.5M11 12h6.5");
}
</style><path class="jsg7029uw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:toast-info"} {...others} />);
}

export default Component;
