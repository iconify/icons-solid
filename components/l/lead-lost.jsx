import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kv2lxlbtv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.857 3.5h10.286a1.75 1.75 0 0 1 1.317 2.902l-3.937 4.5a1.75 1.75 0 0 1-1.317.598h-2.412a1.75 1.75 0 0 1-1.317-.598l-3.937-4.5A1.75 1.75 0 0 1 6.857 3.5M9 15l6 6m0-6l-6 6");
}
</style><path class="kv2lxlbtv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:lead-lost"} {...others} />);
}

export default Component;
