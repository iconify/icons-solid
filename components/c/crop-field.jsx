import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s76xuebgu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8.5h19m-15 0L3 20m9-11.5V20m5.5-11.5L21 20M6.5 8.5q0-3.5 3-4q0 3-3 4Zm5.5 0q0-3.5 3-4q0 3-3 4Zm5.5 0q0-3.5 3-4q0 3-3 4Z");
}
</style><path class="s76xuebgu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:crop-field"} {...others} />);
}

export default Component;
