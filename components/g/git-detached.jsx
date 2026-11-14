import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a6rufac2s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 2.5V11m-3 3a3 3 0 1 0 6 0a3 3 0 1 0-6 0m3 3v4.5m4.75-11l2.5-1.5m1.75-3.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}
</style><path class="a6rufac2s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:git-detached"} {...others} />);
}

export default Component;
