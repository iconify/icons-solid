import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iw_wx1bmp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3H6v18H2.5Zm9.75 16.2V21h-3.5V8h3.5v9.3M15 14.6V13h.2m2.8 1.5V21m-2.75-2.75L18 21l2.75-2.75");
}
</style><path class="iw_wx1bmp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:loss-reason"} {...others} />);
}

export default Component;
