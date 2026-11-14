import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sbgynn7uq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 15.5h14a2 2 0 0 1 0 4H5a2 2 0 0 1 0-4m1 0a2 2 0 0 1 0-4h11a2 2 0 0 1 0 4m-8-4a2 2 0 0 1 0-4h8.5a2 2 0 0 1 0 4m-7.5-4c0-3.5 4.5-3.5 4.5 0");
}
</style><path class="sbgynn7uq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:blini"} {...others} />);
}

export default Component;
