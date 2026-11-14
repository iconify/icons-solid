import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n29hy8biw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.25 3h4.25a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H18l-2.25 2.25V12h-.5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2M4.5 9.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-2 11c0-3.5 2.25-5 5-5s5 1.5 5 5");
}
</style><path class="n29hy8biw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:user-interview"} {...others} />);
}

export default Component;
