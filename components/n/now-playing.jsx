import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.stv_o8b1v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.71 6.55l5.58 4.65q.96.8 0 1.6l-5.58 4.65q-.96.8-.96-.45V7q0-1.25.96-.45M15 9.75v4.5m3-7.5v10.5m3-7v3.5");
}
</style><path class="stv_o8b1v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:now-playing"} {...others} />);
}

export default Component;
