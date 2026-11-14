import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft00h-bnk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 6h5v12h-5Zm-7 6h4.25M4.5 9.75L6.75 12L4.5 14.25Zm17 2.25h-4.25m2.25-2.25L17.25 12l2.25 2.25Z");
}
</style><path class="ft00h-bnk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:force-feedback"} {...others} />);
}

export default Component;
