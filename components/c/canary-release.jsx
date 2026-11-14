import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yoj98-b2t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.688 17.72A9.8 9.8 0 0 1 9 17.5c-3.5-1-4.25-4-3.75-7.25L3.5 9l1.75-1.25C6 5.5 9.5 5 10.5 8q.75 3 4.5 3l5.5-2l-1.166 3.499M10 17.75V21M7.75 9h.01M18 21v-6m-2.5 2.5L18 15l2.5 2.5");
}
</style><path class="yoj98-b2t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:canary-release"} {...others} />);
}

export default Component;
