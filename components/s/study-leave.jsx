import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xe4mldb7s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 5h6a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2H4Zm16 0h-6a2 2 0 0 0-2 2v13a2 2 0 0 1 2-2h6Z");
}
</style><path class="xe4mldb7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:study-leave"} {...others} />);
}

export default Component;
