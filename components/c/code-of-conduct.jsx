import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oxd3clb4e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21.5v-14a4 4 0 0 1 8 0v14Zm11 0v-14a4 4 0 0 1 8 0v14Zm-8.25-11h2.5M5.25 14h2.5m-2.5 3.5h2.5m8.5-7h2.5m-2.5 3.5h2.5m-2.5 3.5h2.5");
}
</style><path class="oxd3clb4e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:code-of-conduct"} {...others} />);
}

export default Component;
