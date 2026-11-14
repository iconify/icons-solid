import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l_s8b87fa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5H9V7H2.5ZM3 7v11.5A1.5 1.5 0 0 0 4.5 20h4a2 2 0 0 0 2-2c0-2-2-2.5-2-5V7m5-3.5H20V7h-6.5ZM14 7v11.5a1.5 1.5 0 0 0 1.5 1.5h4a2 2 0 0 0 2-2c0-2-2-2.5-2-5V7");
}
</style><path class="l_s8b87fa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:surf-booties"} {...others} />);
}

export default Component;
