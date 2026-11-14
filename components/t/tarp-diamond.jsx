import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oc6pjcekr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.237 6.237l4.526 4.526a1.75 1.75 0 0 1 0 2.474l-4.526 4.526a1.75 1.75 0 0 1-2.474 0l-4.526-4.526a1.75 1.75 0 0 1 0-2.474l4.526-4.526a1.75 1.75 0 0 1 2.474 0M12 12h.01M12 2.25h.01M21.75 12h.01M12 21.75h.01M2.25 12h.01");
}
</style><path class="oc6pjcekr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:tarp-diamond"} {...others} />);
}

export default Component;
