import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rx8grow-a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 9a2 2 0 0 0 0 4a3.75 3.75 0 0 0 0-7.5a5.5 5.5 0 0 0 0 11h4m0-1.75h4v3.5h-4zm4 1.75h1.75M20 15l1.25-1M20 18l1.25 1");
}
</style><path class="rx8grow-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:garden-hose-sharp"} {...others} />);
}

export default Component;
