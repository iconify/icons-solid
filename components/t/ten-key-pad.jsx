import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sshs15b3f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3h17v18h-17ZM7 6.5h.01m3.49 0h.01m3.49 0h.01M7 10h.01m3.49 0h.01M14 10h.01M7 13.5h.01m3.49 0h.01m3.49 0h.01M7 17h3.5m3.5 0h.01m3.24-10.5V10m0 3.5V17");
}
</style><path class="sshs15b3f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:ten-key-pad"} {...others} />);
}

export default Component;
