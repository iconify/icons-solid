import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.stsqzfbkf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.268 5.356l-5.841 6.107A1.5 1.5 0 0 0 7.51 14h1.909a1.5 1.5 0 0 1 1.423 1.974l-.592 1.776a.887.887 0 0 0 1.482.894l5.841-6.107A1.5 1.5 0 0 0 16.49 10h-1.909a1.5 1.5 0 0 1-1.423-1.974l.592-1.776a.887.887 0 0 0-1.482-.894");
}
</style><path class="stsqzfbkf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:flash-on"} {...others} />);
}

export default Component;
