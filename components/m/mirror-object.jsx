import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qrh0sibhq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 8.389v9.361a1.75 1.75 0 0 1-1.75 1.75h-2a1.75 1.75 0 0 1-1.75-1.75v-7.025a1.75 1.75 0 0 1 .513-1.238L6.25 7.25A1.611 1.611 0 0 1 9 8.389m6 0v9.361a1.75 1.75 0 0 0 1.75 1.75h2a1.75 1.75 0 0 0 1.75-1.75v-7.025a1.75 1.75 0 0 0-.513-1.238L17.75 7.25A1.611 1.611 0 0 0 15 8.389M12 2.5V5m0 3.5V11m0 3.5V17m0 3.5v1");
}
</style><path class="qrh0sibhq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:mirror-object"} {...others} />);
}

export default Component;
