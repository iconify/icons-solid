import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ky9z5uzwi {
  fill: currentColor;
  d: path("m8.9 20l-1.4-1.4l4.5-4.5l4.5 4.5l-1.4 1.4l-3.1-3.1zM12 9.9L7.5 5.4L8.9 4L12 7.1L15.1 4l1.4 1.4z");
}
</style><path class="ky9z5uzwi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:unfold-less-outline-sharp"} {...others} />);
}

export default Component;
