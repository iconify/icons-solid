import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a8kt6mb0q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 5.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM15 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM3 18.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM8.75 7l6.5 3.5M8.75 17l6.5-3.5M6 8.5v7");
}
</style><path class="a8kt6mb0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:resource-dependency"} {...others} />);
}

export default Component;
