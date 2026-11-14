import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gt8olib8g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.06 20h3.88a1.75 1.75 0 0 0 1.509-2.637l-1.941-3.299a1.75 1.75 0 0 0-3.016 0l-1.941 3.299A1.75 1.75 0 0 0 6.06 20m4.69-15a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m5.5 5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m0 7.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}
</style><path class="gt8olib8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:pool-break"} {...others} />);
}

export default Component;
