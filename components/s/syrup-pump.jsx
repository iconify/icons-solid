import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nmith6bvw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.875 9.5h4.25a4.375 4.375 0 0 1 4.375 4.375v2.75A4.375 4.375 0 0 1 14.125 21h-4.25A4.375 4.375 0 0 1 5.5 16.625v-2.75A4.375 4.375 0 0 1 9.875 9.5M10.75 7h2.5a1.25 1.25 0 0 1 1.25 1.25a1.25 1.25 0 0 1-1.25 1.25h-2.5A1.25 1.25 0 0 1 9.5 8.25A1.25 1.25 0 0 1 10.75 7M12 7V3.5m-3 0h10v2");
}
</style><path class="nmith6bvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:syrup-pump"} {...others} />);
}

export default Component;
