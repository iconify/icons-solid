import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qsd1v4byy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 8L12 2.5L19.5 8Zm1 0v10.5M18.5 8v10.5M4 21.5v-3h16v3m-17.5 0h19M9 18.5V11h6v7.5m-1.75-3.75h.01");
}
</style><path class="qsd1v4byy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:porch"} {...others} />);
}

export default Component;
