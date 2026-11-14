import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a-3ffbbmp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20v-7H4V9.5h3V13h5V9.5h3V13l3-2.5V13l3.5-2.5V20Zm1-14.75a2 1.5 0 1 0 4 0a2 1.5 0 1 0-4 0m8 0a2 1.5 0 1 0 4 0a2 1.5 0 1 0-4 0");
}
</style><path class="a-3ffbbmp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:emissions"} {...others} />);
}

export default Component;
