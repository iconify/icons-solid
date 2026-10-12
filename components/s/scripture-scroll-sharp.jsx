import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uvelkabgg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 5.75h13v12.5h-13ZM8.5 9h7m-7 3h7m-7 3H13M3.75 2.75h16.5v3H3.75zm0 15.5h16.5v3H3.75z");
}
</style><path class="uvelkabgg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:scripture-scroll-sharp"} {...others} />);
}

export default Component;
