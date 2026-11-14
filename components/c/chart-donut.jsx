import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.doc4jcbre {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 5.5a8 8 0 1 0 8 8H15A4.5 4.5 0 1 1 10.5 9Zm2.75-2.75a8 8 0 0 1 8 8h-3.5a4.5 4.5 0 0 0-4.5-4.5Z");
}
</style><path class="doc4jcbre"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:chart-donut"} {...others} />);
}

export default Component;
