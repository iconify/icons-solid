import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v-l09eh7p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4.5q9 5 18 0m-18 7q9 5 18 0m-18 7q9 5 18 0M8 3.5q1.25-.75 2.5 0t2.5 0t2.5 0m-7.5 7q1.25-.75 2.5 0t2.5 0t2.5 0m-7.5 7q1.25-.75 2.5 0t2.5 0t2.5 0");
}
</style><path class="v-l09eh7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:furrow-irrigation"} {...others} />);
}

export default Component;
