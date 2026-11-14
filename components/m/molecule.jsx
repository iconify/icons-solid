import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kfm5k9byl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 16a3 3 0 1 0 6 0a3 3 0 1 0-6 0M9 8a3 3 0 1 0 6 0a3 3 0 1 0-6 0m6.5 8a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-8-2.5l2.5-3m4 0l2.5 3");
}
</style><path class="kfm5k9byl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:molecule"} {...others} />);
}

export default Component;
