import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pcxved7zk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.25 7.25c1.5-1.5 2.75-.75 5 1c2 1.75 3 3 1.5 4.5l-11.25 7Zm3.815-.044l1.36-4.733m-.211 5.697l3.214-3.83m-2.065 4.794l4.425-2.162");
}
</style><path class="pcxved7zk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:category-vegan"} {...others} />);
}

export default Component;
