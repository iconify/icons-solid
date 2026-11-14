import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ep98p2bfs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 3c0 1.5 1.5 2.5 3 2.5s3-1 3-2.5l5.5 2.75l1 4.75l-4 .5v10h-11V11l-4-.5l1-4.75Zm3 2.5V9m-5.5 5h11");
}
</style><path class="ep98p2bfs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:rugby-jersey"} {...others} />);
}

export default Component;
