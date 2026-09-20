import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.liby2ob4l {
  fill: currentColor;
  d: path("M21 21V3zM3 21h10V3H3zm18 0V3h-6v18z");
}
</style><path class="liby2ob4l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:grid-layout-side-sharp"} {...others} />);
}

export default Component;
