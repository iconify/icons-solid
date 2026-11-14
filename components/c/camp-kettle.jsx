import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uop7mdv-w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.5 14.5l1.5-6h12l1.5 6Zm1.5-6c0-6 12-6 12 0m-12.75 3L2.75 8M13 17.25c1.75 1.75 1.75 3.5 0 3.5s-1.75-1.75 0-3.5");
}
</style><path class="uop7mdv-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:camp-kettle"} {...others} />);
}

export default Component;
