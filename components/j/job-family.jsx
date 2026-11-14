import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vyey7ubgc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21.5V8m0 8.5L7.5 12m4.5 2l4.5-4.5M9 21.5h6m-11-11a2 2 0 1 0 4 0a2 2 0 1 0-4 0M9.5 5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M16 8a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><path class="vyey7ubgc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:job-family"} {...others} />);
}

export default Component;
