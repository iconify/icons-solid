import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.omc6c8b5m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 8a10 10 0 0 1 17 0a10 10 0 0 1-17 0m8.5 4.75V16m-3.5 0h7l1.5 5H7ZM9 8h6m-4.5-1.25v2.5m3-2.5v2.5");
}
</style><path class="omc6c8b5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:football-trophy-american"} {...others} />);
}

export default Component;
