import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r8vtb2cem {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 18.75V14m0 1.25c-.1-2.4-1.85-3.8-4.75-3.75c.1 2.4 1.85 3.8 4.75 3.75Zm0-1.25c-.1-2.9 1.65-5 4.5-5c-.05 2.8-1.8 4.9-4.5 5Zm11.25 6V5m-3 3l3-3l3 3");
}
</style><path class="r8vtb2cem"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:growth-tracker"} {...others} />);
}

export default Component;
