import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ccw-1qb5f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 3h9M10 3v3c-4 2.5-5 6-5 8c0 3 2 4.5 4 5l-1 2h8l-1-2c2-.5 4-2 4-5c0-2-1-5.5-5-8V3");
}
</style><path class="ccw-1qb5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:ceramic-vase"} {...others} />);
}

export default Component;
