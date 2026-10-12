import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yy3mofwlr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2.75l1.5 2.5v9h-3v-9Zm-3.25 11.5h6.5m-3.25 0v4.5m3.25 2.5C7 20.5 2.25 14.5 3.75 4.5m5 16.75c8.25-.75 13-6.75 11.5-16.75");
}
</style><path class="yy3mofwlr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:khanda"} {...others} />);
}

export default Component;
