import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q6f5wdbum {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.5 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2 3.5v6.5m-3 6.5l3-6.5l3 6.5m-3-11.5l4 3m-4-3l-4-1M3 3l4 4l-2.5 1.5l4 4");
}
</style><path class="q6f5wdbum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:electric-shock"} {...others} />);
}

export default Component;
