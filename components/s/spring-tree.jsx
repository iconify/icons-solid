import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g2c6z2b2m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21.5v-15m0 8.5L6.5 9.5M12 12l5.5-5.5M3.75 8a1.25 2.25 0 1 0 2.5 0a1.25 2.25 0 1 0-2.5 0m14-3a1.25 2.25 0 1 0 2.5 0a1.25 2.25 0 1 0-2.5 0m-7-.75a1.25 2.25 0 1 0 2.5 0a1.25 2.25 0 1 0-2.5 0");
}
</style><path class="g2c6z2b2m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:spring-tree"} {...others} />);
}

export default Component;
