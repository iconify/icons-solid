import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z3ehtpbpr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h19v4.75h-19Zm9.45 11.75H2.5V10h19v3.7M8.5 3v4.75M15 3v4.75M8.5 10v4.75M15 10v3.7m-.25 2.8h6.5m-6.5 3.25h6.5");
}
</style><path class="z3ehtpbpr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:duplicate-rows"} {...others} />);
}

export default Component;
