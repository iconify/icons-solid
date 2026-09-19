import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h9dyyxs0l {
  fill: currentColor;
  d: path("M7.41 13.41L6 12l-4 4l4 4l1.41-1.41L5.83 17H21v-2H5.83zm9.18-2.82L18 12l4-4l-4-4l-1.41 1.41L18.17 7H3v2h15.17z");
}
</style><path class="h9dyyxs0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-sync-alt"} {...others} />);
}

export default Component;
