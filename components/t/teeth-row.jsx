import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pctmxhf8x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 7.5h10a4.5 4.5 0 0 1 4.5 4.5a4.5 4.5 0 0 1-4.5 4.5H7A4.5 4.5 0 0 1 2.5 12A4.5 4.5 0 0 1 7 7.5m.75 0v9m4.25-9v9m4.25-9v9");
}
</style><path class="pctmxhf8x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:teeth-row"} {...others} />);
}

export default Component;
