import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t7-u9dbpu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12h19L19 16.5H5ZM6 8h5.5v4H6Zm5.5 0H17v4h-5.5ZM8.75 4h5.5v4h-5.5ZM3 20q2.25-1.5 4.5 0t4.5 0t4.5 0t4.5 0");
}
</style><path class="t7-u9dbpu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:business-marine-cargo"} {...others} />);
}

export default Component;
