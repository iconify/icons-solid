import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.shiz67bue {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 10h8a2.75 2.75 0 0 0 0-5.5a4 4 0 0 0-7.25.75A2.5 2.5 0 0 0 8 10m-.75 8h9.5a1.75 1.75 0 0 1 1.75 1.75a1.75 1.75 0 0 1-1.75 1.75h-9.5a1.75 1.75 0 0 1-1.75-1.75A1.75 1.75 0 0 1 7.25 18M12 18v-5m-2.25 2.25L12 13l2.25 2.25");
}
</style><path class="shiz67bue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:ceilometer"} {...others} />);
}

export default Component;
