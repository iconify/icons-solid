import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h-mmo8t2i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 2.75h16.5v18.5H3.75zm4 0v18.5m8.5-18.5v18.5m-12.5-13h4m-4 3.75h4m-4 3.75h4m8.5-7.5h4m-4 3.75h4m-4 3.75h4");
}
</style><path class="h-mmo8t2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:film-sharp"} {...others} />);
}

export default Component;
