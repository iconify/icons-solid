import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a_tumxblg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 19.5h19M3.25 13h4v6.5h-4ZM10 13h4v6.5h-4Zm6.75 0h4v6.5h-4ZM4 7.5h16m-2.25-2.25L20 7.5l-2.25 2.25");
}
</style><path class="a_tumxblg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:shelf-facing"} {...others} />);
}

export default Component;
