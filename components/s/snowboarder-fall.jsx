import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mgr41fb9s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 19.5L5.5 6a2.5 2.5 0 0 1 5 0L13 19.5m-10.5 0h19m-6.5-5l1.5-3m.75 5L21 14.75m-1-3.25h.01");
}
</style><path class="mgr41fb9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:snowboarder-fall"} {...others} />);
}

export default Component;
