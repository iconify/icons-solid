import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i1j99abgt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.25 8h3.5A5.25 5.25 0 0 1 19 13.25v.5A5.25 5.25 0 0 1 13.75 19h-3.5A5.25 5.25 0 0 1 5 13.75v-.5A5.25 5.25 0 0 1 10.25 8M12 3v5m-1-5a1 1 0 1 0 2 0a1 1 0 1 0-2 0M9 13h.01M15 13h.01M3 12v3m18-3v3");
}
</style><path class="i1j99abgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:robotics-kit"} {...others} />);
}

export default Component;
