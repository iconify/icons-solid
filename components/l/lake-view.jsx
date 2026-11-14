import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cqovxzbaa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10.5H7c1 2.5 1.5 6.5 2 11m-2-11h14m-8 0v5m6-5v5m-8.5 0q1.25-1 2.5 0t2.5 0t2.5 0t2.5 0q.5-.5 1-.25M11 19.5q1.25-1 2.5 0t2.5 0t2.5 0t2.5 0");
}
</style><path class="cqovxzbaa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:lake-view"} {...others} />);
}

export default Component;
