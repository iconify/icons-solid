import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.revqz6bxf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0ZM4 21c0-3.006 1.976-5.165 4.868-6.052M18 14.25l1.029 2.084l2.3.334l-1.665 1.623l.393 2.291L18 19.5l-2.057 1.082l.393-2.291l-1.665-1.623l2.3-.334Z");
}
</style><path class="revqz6bxf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:candidate-rating"} {...others} />);
}

export default Component;
