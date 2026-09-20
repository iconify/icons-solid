import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pr2np755g {
  fill: currentColor;
  d: path("M7 17h10v-2H7zm1.4-4L12 9.4l3.6 3.6l1.4-1.4l-5-5l-5 5zM3 21V3h18v18z");
}
</style><path class="pr2np755g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:keyboard-capslock-badge-sharp"} {...others} />);
}

export default Component;
