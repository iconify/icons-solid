import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rfrlwib1q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 11c-2.5-2-2.5-6 0-8.5C14.5 5 14.5 9 12 11m0 0c-3.5-1-8 0-8.5 4.5c3.5.5 7-1 8.5-4.5m0 0c3.5-1 8 0 8.5 4.5c-3.5.5-7-1-8.5-4.5m0 0v10.5");
}
</style><path class="rfrlwib1q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:iris-flower"} {...others} />);
}

export default Component;
