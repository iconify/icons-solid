import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ms99u7bbf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 9.5V8a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v1.5m-17 6V17a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-1.5m-18-3H9m6 0h6.5m-11-1.5h3a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 12.5a1.5 1.5 0 0 1 1.5-1.5");
}
</style><path class="ms99u7bbf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:fiber-splice-tray"} {...others} />);
}

export default Component;
