import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cv8ywjmee {
  fill: currentColor;
  d: path("m17 17l-1.4-1.4l2.575-2.6H13v-2h5.175L15.6 8.4L17 7l5 5zM7 17l-5-5l5-5l1.4 1.4L5.825 11H11v2H5.825L8.4 15.6z");
}
</style><path class="cv8ywjmee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:arrows-outward"} {...others} />);
}

export default Component;
