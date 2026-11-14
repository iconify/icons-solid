import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lhqpeom4k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 2.5h11a2 2 0 0 1 2 2V13a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2V4.5a2 2 0 0 1 2-2ZM10 15h4v6.5h-4Zm-.5-8.5h.01m4.99 0h.01M9.5 11h.01m4.99 0h.01");
}
</style><path class="lhqpeom4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:pickleball-paddle"} {...others} />);
}

export default Component;
