import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hnvy6abus {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m11.768 7.197l3.535 3.535l-7.071 7.071l-3.535-3.535ZM13.5 9l4-4m-11 11l-2.25 2.25m-1.5-1.5l3 3M20 7.5s2 2.25 2 3.5a2 2 0 0 1-4 0c0-1.25 2-3.5 2-3.5Z");
}
</style><path class="hnvy6abus"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:flu-shot"} {...others} />);
}

export default Component;
