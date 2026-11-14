import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fme4stbwv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13h19l-2 3.5h-15Zm.25 0a2.25 2.25 0 0 1 4.5 0m2.5 0a2.25 2.25 0 0 1 4.5 0m2.5 0a2.25 2.25 0 0 1 4.5 0M5 8h.01M12 8h.01M19 8h.01");
}
</style><path class="fme4stbwv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:canape-tray"} {...others} />);
}

export default Component;
