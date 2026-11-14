import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yw7b0nnrq {
  d: path("M15 15.5q2-2.5 0-5m0 5q1 3 4.25 2.5M15 15.5q-3 0-4.25 2.5M8 20.5h13");
}

.zmt2wtbbh {
  d: path("M10 15.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0Zm2-4l-6-8m-2.5 0h5");
}
</style><g class="ulnmmdpxh"><path class="zmt2wtbbh"/><path class="yw7b0nnrq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:lawn-mower-reel"} {...others} />);
}

export default Component;
