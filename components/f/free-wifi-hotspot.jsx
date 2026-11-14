import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.raetm1dny {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 19.5h.01m-3.546-3.536a5 5 0 0 1 7.072 0M4.929 12.429a10 10 0 0 1 14.142 0M2.358 8.009a15 15 0 0 1 19.284 0");
}
</style><path class="raetm1dny"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:free-wifi-hotspot"} {...others} />);
}

export default Component;
