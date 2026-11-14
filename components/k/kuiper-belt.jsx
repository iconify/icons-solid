import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hv7__jb0f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0m11.5 0h.01m-2.76 3.5h.01M12 17h.01m-6.76-1.5h.01M2.5 12h.01m2.74-3.5h.01M12 7h.01m6.74 1.5h.01");
}
</style><path class="hv7__jb0f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:kuiper-belt"} {...others} />);
}

export default Component;
