import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.aurknm4ux {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M45.499 24.199c-.1 10.638-7.965 19.603-18.499 21.087V2.714a21.5 21.5 0 0 1 17.714 15.528L3.287 29.76A21.5 21.5 0 0 0 21 45.286V2.716C10.466 4.2 2.601 13.166 2.501 23.803");
}
</style><path class="aurknm4ux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:we-care"} {...others} />);
}

export default Component;
