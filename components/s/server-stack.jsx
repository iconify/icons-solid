import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.no-udgugb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 2.5h13.5A2.25 2.25 0 0 1 21 4.75A2.25 2.25 0 0 1 18.75 7H5.25A2.25 2.25 0 0 1 3 4.75A2.25 2.25 0 0 1 5.25 2.5m0 7.25h13.5A2.25 2.25 0 0 1 21 12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12a2.25 2.25 0 0 1 2.25-2.25m0 7.25h13.5A2.25 2.25 0 0 1 21 19.25a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 19.25A2.25 2.25 0 0 1 5.25 17M6.5 4.75h.01M6.5 12h.01m-.01 7.25h.01");
}
</style><path class="no-udgugb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:server-stack"} {...others} />);
}

export default Component;
