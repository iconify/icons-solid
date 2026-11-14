import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w8fjlibnm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 20.5c-1.5-5.5-1-12 0-17c1 5 1.5 11.5 0 17m-1 0c-3-2-5.5-7-7-12c3 2.5 6 6.5 7 12m2 0c3-2 5.5-7 7-12c-3 2.5-6 6.5-7 12");
}
</style><path class="w8fjlibnm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:aloe-vera"} {...others} />);
}

export default Component;
