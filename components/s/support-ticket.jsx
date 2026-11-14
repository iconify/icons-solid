import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j77te7bsx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 5h10a1.5 1.5 0 0 0 3 0h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2a1.5 1.5 0 0 0-3 0h-10a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2M16 9v6M6 10h5.5M6 14h4");
}
</style><path class="j77te7bsx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:support-ticket"} {...others} />);
}

export default Component;
