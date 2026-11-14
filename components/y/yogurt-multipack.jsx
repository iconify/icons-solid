import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cmi8lwbkj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 12H11l-.75 8h-6Zm9.5 0h7.5l-.75 8h-6ZM3.5 4.5H11L10.25 9h-6Zm9.5 0h7.5L19.75 9h-6Z");
}
</style><path class="cmi8lwbkj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:yogurt-multipack"} {...others} />);
}

export default Component;
