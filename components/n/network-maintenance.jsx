import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lbkal5_1f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.9 16H3V9h14v2.9M6.5 4v5M10 4v5m3.5-5v5m5.25 5.5a3 3 0 1 0 2.75 2.75h-2l-.75-.75Zm-4.25 7l1.75-1.75");
}
</style><path class="lbkal5_1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:network-maintenance"} {...others} />);
}

export default Component;
