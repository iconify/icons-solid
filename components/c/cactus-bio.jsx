import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.obt8tbx2g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 20.5V16h-3a3 3 0 0 1-3-3V9.5a1.5 1.5 0 0 1 3 0V13h3V5.5a2.5 2.5 0 0 1 5 0V11h3V7.5a1.5 1.5 0 0 1 3 0V11a3 3 0 0 1-3 3h-3v6.5m-11 0h17");
}
</style><path class="obt8tbx2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cactus-bio"} {...others} />);
}

export default Component;
