import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zhgpszbge {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 4.5a2.75 2.75 0 0 1 4 4l-6 6a2.75 2.75 0 0 1-4-4Zm7 5a2.75 2.75 0 0 1 4 4l-6 6a2.75 2.75 0 0 1-4-4Zm-10-2l4 4m3 1l4 4");
}
</style><path class="zhgpszbge"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:capsule-two"} {...others} />);
}

export default Component;
