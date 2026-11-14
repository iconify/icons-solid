import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gw7o7owkh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 2.5V8L3 16M14.5 2.5V8l6.5 8M8.5 16l3.5-5l3.5 5M12 11v5m-9.5 3.5q2.25-1.5 4.5 0t4.5 0t4.5 0t4.5 0");
}
</style><path class="gw7o7owkh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:estuary"} {...others} />);
}

export default Component;
