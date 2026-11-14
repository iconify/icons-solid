import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d0-4_sbon {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 2.5h8a2 2 0 0 1 2 2V7a2 2 0 0 1-2 2H8.5l-3 2.5V9H5a2 2 0 0 1-2-2V4.5a2 2 0 0 1 2-2m7 9.5h7a2 2 0 0 1 2 2v2.5a2 2 0 0 1-2 2h-.5V21l-3-2.5H12a2 2 0 0 1-2-2V14a2 2 0 0 1 2-2");
}
</style><path class="d0-4_sbon"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:talk-therapy"} {...others} />);
}

export default Component;
