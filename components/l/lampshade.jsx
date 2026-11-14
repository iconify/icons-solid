import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w-7g_acuz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.197 3h7.606a1.75 1.75 0 0 1 1.631 1.116l2.139 5.5A1.75 1.75 0 0 1 17.942 12H6.058a1.75 1.75 0 0 1-1.631-2.384l2.139-5.5A1.75 1.75 0 0 1 8.197 3M12 12v9m-4.5 0h9");
}
</style><path class="w-7g_acuz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:lampshade"} {...others} />);
}

export default Component;
