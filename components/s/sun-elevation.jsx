import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uwcvuvw5c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 19.5h19M15 6.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm-11 13L7.75 16m2-2l3.75-3.25M4 14.5a5 5 0 0 1 3.41 1.343");
}
</style><path class="uwcvuvw5c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:sun-elevation"} {...others} />);
}

export default Component;
