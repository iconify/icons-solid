import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ikt9wlkpn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 15a9 7 0 0 1 18 0Zm9 0v4.5a1.75 1.75 0 0 1-3.5 0M7 3l-.5 2m5.75-2.5l-.5 2M17.5 3L17 5");
}
</style><path class="ikt9wlkpn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:rain-on-umbrella"} {...others} />);
}

export default Component;
