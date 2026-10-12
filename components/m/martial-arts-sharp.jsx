import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qvfifrb1w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 7.5H9.5v4.25H2.75zm11.75 0h6.75v4.25H14.5zm-5-1.75h5v7.5h-5zm0 9h1.25l-.25.71l-1.75 4.83l-.25.71l-.73-.16l-.79-.18l-.73-.16l.3-.69l1.9-4.37l.3-.69zm4.5 0h1.25l.3.69l1.9 4.37l.3.69l-.73.16l-.79.18l-.73.16l-.25-.71l-1.75-4.83l-.25-.71z");
}
</style><path class="qvfifrb1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:martial-arts-sharp"} {...others} />);
}

export default Component;
