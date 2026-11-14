import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jn5w46byz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 19.5V7a8 8 0 0 1 13 0v12.5a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2m3-7.5h7m-7 4h5");
}
</style><path class="jn5w46byz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:prayer-card"} {...others} />);
}

export default Component;
