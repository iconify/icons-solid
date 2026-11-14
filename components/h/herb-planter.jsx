import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.atn5qqbdt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 12.5h17v3h-17Zm1.5 3h14L18 21H6Zm3-3v-4c0-3-2-5-4.5-5c0 3 2 5 4.5 5m8 4v-4c0-3 2-5 4.5-5c0 3-2 5-4.5 5");
}
</style><path class="atn5qqbdt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:herb-planter"} {...others} />);
}

export default Component;
