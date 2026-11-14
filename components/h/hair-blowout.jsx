import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iddx84b-r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 8H12c1 0 2 .8 2 2v2H8l-1 7c-.1.7-.5 1.5-1.5 1.5H4L5 12H3.5ZM17 8h4m-4 3h4m-4 3h4");
}
</style><path class="iddx84b-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:hair-blowout"} {...others} />);
}

export default Component;
