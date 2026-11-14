import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w7ofa3nej {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 17.5h16V21H4ZM6.5 13h11v3h-11ZM9 9h6v2.5H9Zm3-2c-2.5-.5-2.5-3.5 0-4.5c2.5 1 2.5 4 0 4.5Z");
}
</style><path class="w7ofa3nej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:spa-treatment"} {...others} />);
}

export default Component;
