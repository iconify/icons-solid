import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w0fw7mbns {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 13h11a3.25 3.25 0 0 0 0-6.5A5.5 5.5 0 0 0 7 7a3 3 0 0 0-.5 6m5.5 0v2.75m-7.25 0h14.5A1.75 1.75 0 0 1 21 17.5v2a1.75 1.75 0 0 1-1.75 1.75H4.75A1.75 1.75 0 0 1 3 19.5v-2a1.75 1.75 0 0 1 1.75-1.75m2 2.75h.01m5.74 0h5");
}
</style><path class="w0fw7mbns"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cloud-server"} {...others} />);
}

export default Component;
