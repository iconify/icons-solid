import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.veuc6xbkf {
  fill: currentColor;
  d: path("m18 16l-4-4l4-4l1.4 1.4l-1.575 1.6H22v2h-4.175l1.575 1.6zm-7 4V4h2v16zm-5-4l-1.4-1.4L6.175 13H2v-2h4.175L4.6 9.4L6 8l4 4z");
}
</style><path class="veuc6xbkf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:horizontal-align-center"} {...others} />);
}

export default Component;
