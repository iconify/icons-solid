import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qzvofsg9i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 3.75a9 9 0 1 0 9 0l-1.75 5a3.75 3.75 0 1 1-5.5 0Zm-1 4.5h.01m-.76 4.25h.01m2.24 4h.01m9.49-8.25h.01m.74 4.25h.01m-2.26 4h.01");
}
</style><path class="qzvofsg9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:horseshoe-lucky"} {...others} />);
}

export default Component;
