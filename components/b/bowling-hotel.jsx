import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w768wminc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 21c-1-3.5-.5-7 1-9.5c.5-1 0-2-.25-3C6.25 6.5 7 3 9 3s2.75 3.5 2.25 5.5c-.25 1-.75 2-.25 3c1.5 2.5 2 6 1 9.5Zm8.75-3.25a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0M7 9.5h4");
}
</style><path class="w768wminc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bowling-hotel"} {...others} />);
}

export default Component;
