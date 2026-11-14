import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mxm3tzr_h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 3.5h-3v17h3m9-17h3v17h-3m-7-11a2.5 2.5 0 1 1 3.75 2.25c-.85.4-1.25 1-1.25 1.75m0 3h.01");
}
</style><path class="mxm3tzr_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:undefined-value"} {...others} />);
}

export default Component;
