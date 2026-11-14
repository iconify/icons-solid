import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nhyixnbxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 13.5v-5a6.5 6.5 0 0 1 13 0v5h-4v-5a2.5 2.5 0 0 0-5 0v5Zm-2 3.5h17v4.5h-17Zm2-6h4m5 0h4");
}
</style><path class="nhyixnbxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:superconductor"} {...others} />);
}

export default Component;
