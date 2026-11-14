import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zjwdnxb2e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 7a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0M2.5 20v-1c0-3.25 2.25-5.5 5-5.5c1.5 0 2.5.25 3.25.75M13.5 9.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-2.5 11c0-3 2.25-5 5.5-5s5 2 5 5");
}
</style><path class="zjwdnxb2e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:gym-buddy"} {...others} />);
}

export default Component;
