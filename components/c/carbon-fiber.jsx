import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fw4bs7bra {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h18v18H3Zm0 14l6.75-6.75m4.5-4.5L17 3M3 7l2.75 2.75m4.5 4.5L17 21M7 21l2.75-2.75m4.5-4.5L21 7M7 3l6.75 6.75m4.5 4.5L21 17");
}
</style><path class="fw4bs7bra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:carbon-fiber"} {...others} />);
}

export default Component;
