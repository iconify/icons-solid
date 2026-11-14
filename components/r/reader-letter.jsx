import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ebd74bcus {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 5.5L3 4v14.5l9 1.5l9-1.5V4Zm0 0V20M6 8.5L9 9m-3 3l3 .5M15 9l3-.5m-3 4l3-.5");
}
</style><path class="ebd74bcus"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:reader-letter"} {...others} />);
}

export default Component;
