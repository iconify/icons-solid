import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.epzz_cb9x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10 10l10.5 4l-4.5 2l-2 4.5Zm0-3V2.5M7.75 4.75L10 2.5l2.25 2.25M7 10H2.5m2.25-2.25L2.5 10l2.25 2.25");
}
</style><path class="epzz_cb9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:pointer-spread"} {...others} />);
}

export default Component;
