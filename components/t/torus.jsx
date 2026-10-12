import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lgikgacmn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 12a9.25 6.75 0 1 0 18.5 0a9.25 6.75 0 1 0-18.5 0m4.75-.5a4.5 2.5 0 1 1 9 0a4.5 2.5 0 1 1-9 0");
}
</style><path class="lgikgacmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:torus"} {...others} />);
}

export default Component;
