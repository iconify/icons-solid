import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rhw609b2r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10.127 11.906l4.895-6.151a1.75 1.75 0 0 1 2.607-.147l.763.763a1.75 1.75 0 0 1-.147 2.607l-6.151 4.895a1.4 1.4 0 0 1-1.862-.105a1.4 1.4 0 0 1-.105-1.862m-4.845 6.812l4.95-4.95m-5.833 4.066l1.767 1.767M14.75 17.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0");
}
</style><path class="rhw609b2r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:rounders-bat"} {...others} />);
}

export default Component;
