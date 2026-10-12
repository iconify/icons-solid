import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.plgn5ebnc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.61 6.5a4.5 4.5 0 0 1 8.78 0a4.25 4.25 0 0 1 1.34 8.32A3.25 3.25 0 0 1 12 16.58a3.25 3.25 0 0 1-5.73-1.76A4.25 4.25 0 0 1 7.61 6.5ZM12 17.75v3.5m-2.5 0h5");
}
</style><path class="plgn5ebnc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:deciduous-tree-sharp"} {...others} />);
}

export default Component;
