import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qhvro1bbo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 10.5h16V15c0 3.3-2.7 5.5-6 5.5h-4c-3.3 0-6-2.2-6-5.5ZM8 8C7 6.5 9 5.5 8 4m4 4c-1-1.5 1-2.5 0-4m4 4c-1-1.5 1-2.5 0-4");
}
</style><path class="qhvro1bbo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:wax-pot"} {...others} />);
}

export default Component;
