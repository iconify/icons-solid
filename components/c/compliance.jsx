import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.robzqkb0x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 4.5v16m-4.5 0h9M4.5 7h15m-17 6.5l2-6.5l2 6.5m-4 0c0 2 4 2 4 0m11 0l2-6.5l2 6.5m-4 0c0 2 4 2 4 0");
}
</style><path class="robzqkb0x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:compliance"} {...others} />);
}

export default Component;
