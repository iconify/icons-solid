import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zs6jmzbre {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 8.75h10.5A3.25 3.25 0 0 1 20.5 12a3.25 3.25 0 0 1-3.25 3.25H6.75A3.25 3.25 0 0 1 3.5 12a3.25 3.25 0 0 1 3.25-3.25M6.5 6H10m4 0h3.5m-11 12H10m4 0h3.5");
}
</style><path class="zs6jmzbre"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:board-room-table"} {...others} />);
}

export default Component;
