import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.potwi7g9k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4h7.5v5H3zm10.5 0H21v5h-7.5zM3 13h7.5v5H3zm10.5 0H21v5h-7.5zM3 21h4.5m6 0H18");
}
</style><path class="potwi7g9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:storyboard-sharp"} {...others} />);
}

export default Component;
