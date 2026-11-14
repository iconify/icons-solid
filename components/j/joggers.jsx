import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jz9iiuoav {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 2.5h14v3H5Zm1 3L6.5 18H10l2-9l2 9h3.5L18 5.5M6.5 18H10v3.5H6.5Zm7.5 0h3.5v3.5H14Z");
}
</style><path class="jz9iiuoav"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:joggers"} {...others} />);
}

export default Component;
