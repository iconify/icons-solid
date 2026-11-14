import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f06acy5hv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 8h10a5 5 0 0 1 4 7c0 2-1.25 3-2.75 3c-1.25 0-2-.75-2.75-1.5h-7C7.75 17.25 7 18 5.75 18C4.25 18 3 17 3 15a5 5 0 0 1 4-7m.5 3.5v3M6 13h3m7-1h.01M18 14h.01");
}
</style><path class="f06acy5hv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:game-room"} {...others} />);
}

export default Component;
