import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hlwdudz3d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6 7l-3.5 5L6 17M18 7l3.5 5l-3.5 5m-9-1c2.5 0 6.5-3.5 6.5-6c0-2.25-3.25-2.25-3.25.25C12.25 13 13.5 16 15 16");
}
</style><path class="hlwdudz3d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:g-code"} {...others} />);
}

export default Component;
