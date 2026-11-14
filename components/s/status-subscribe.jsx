import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.djp7l1bep {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 15h13.5M4 15V9.25a5.5 5.5 0 0 1 11 0V15M9.5 2.5v1.25M8 18h3m7.75-1.75v5.5m-3-2.75h6");
}
</style><path class="djp7l1bep"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:status-subscribe"} {...others} />);
}

export default Component;
