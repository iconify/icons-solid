import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m3li4wbqg {
  fill: currentColor;
  d: path("M8.5 19H21v-4.02H8.5zM3 9.02h4.5V5H3zM3 14h4.5v-3.98H3zm0 5h4.5v-4.02H3zm5.5-5H21v-3.98H8.5zm0-4.98H21V5H8.5z");
}
</style><path class="m3li4wbqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:view-list-sharp"} {...others} />);
}

export default Component;
