import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jjhxq4qby {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5q2.25-2 4.75 0Q9.5 7 12 5q2.25-2 4.75 0Q19 7 21.5 5m-19 5q2.25-2 4.75 0Q9.5 12 12 10q2.25-2 4.75 0q2.25 2 4.75 0m-19 5h19m-18 4.5H7m3.25 0h3.5m3.25 0h3.5");
}
</style><path class="jjhxq4qby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:canal-towpath"} {...others} />);
}

export default Component;
