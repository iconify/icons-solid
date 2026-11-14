import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.edf0l6b0o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3.5h7C10.5 9 9 12 7 12S3.5 9 3.5 3.5M7 12v7m-2.5 0h5m4-15.5h7C20.5 9 19 12 17 12s-3.5-3-3.5-8.5M17 12v7m-2.5 0h5");
}
</style><path class="edf0l6b0o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:wine-glass-pair"} {...others} />);
}

export default Component;
