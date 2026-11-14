import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hjpedtb7t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 4v11.5M12 3v12.5M17 4v11.5m-12.5-8q7.5 4 15 0m-17 12q2.25-1.5 4.75 0t4.75 0t4.75 0t4.75 0");
}
</style><path class="hjpedtb7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:dolphin-mooring"} {...others} />);
}

export default Component;
