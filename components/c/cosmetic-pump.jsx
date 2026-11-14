import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yktagpbzr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.875 10.5h2.25a4.375 4.375 0 0 1 4.375 4.375v1.75A4.375 4.375 0 0 1 13.125 21h-2.25A4.375 4.375 0 0 1 6.5 16.625v-1.75a4.375 4.375 0 0 1 4.375-4.375m-.875 0V8h4v2.5M12 8V4.5h4M9.5 15.75h5");
}
</style><path class="yktagpbzr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cosmetic-pump"} {...others} />);
}

export default Component;
