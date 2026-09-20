import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ndgy1mbog {
  fill: currentColor;
  d: path("M4 20V4h16v16zm2-6.714l4-4l4 4l4-4l1 1V5H5v7.287zM5 19h14v-7.292l-1-1l-4 4l-4-4l-4 4l-1-1zm0 0v-7.292v1V5z");
}
</style><path class="ndgy1mbog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:broken-image-outline-sharp"} {...others} />);
}

export default Component;
