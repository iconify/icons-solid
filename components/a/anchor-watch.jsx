import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f6gr75gju {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm2 2V20M6 9.5h7M3.5 13c0 4 2.75 7 6 7c1.27 0 2.465-.458 3.448-1.256m2.469-4.559Q15.5 13.61 15.5 13m.25 7.25h5.5m-4.5 0V17.5a1.75 1.75 0 0 1 3.5 0v2.75");
}
</style><path class="f6gr75gju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:anchor-watch"} {...others} />);
}

export default Component;
