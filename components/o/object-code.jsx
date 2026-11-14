import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qio1kwr0l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 3.5h-1a2 2 0 0 0-2 2v4A2.5 2.5 0 0 1 3 12a2.5 2.5 0 0 1 2.5 2.5v4a2 2 0 0 0 2 2h1m7-17h1a2 2 0 0 1 2 2v4A2.5 2.5 0 0 0 21 12a2.5 2.5 0 0 0-2.5 2.5v4a2 2 0 0 1-2 2h-1M12 12h.01");
}
</style><path class="qio1kwr0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:object-code"} {...others} />);
}

export default Component;
