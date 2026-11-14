import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a_iyerbso {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3.5h14l-1.25 5h2.75L19 14h2.5l-2 7.5h-15l-2-7.5H5L3.5 8.5h2.75Zm1.25 5h11.5M5 14h14m-9.5 0v7.5m5-7.5v7.5");
}
</style><path class="a_iyerbso"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:basket-stack"} {...others} />);
}

export default Component;
