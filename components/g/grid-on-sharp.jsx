import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ky2-3xbwe {
  fill: currentColor;
  d: path("M3 21h4.675v-4.675H3zm6.675 0h4.65v-4.675h-4.65zm6.65 0H21v-4.675h-4.675zM3 14.325h4.675v-4.65H3zm6.675 0h4.65v-4.65h-4.65zm6.65 0H21v-4.65h-4.675zM3 7.675h4.675V3H3zm6.675 0h4.65V3h-4.65zm6.65 0H21V3h-4.675z");
}
</style><path class="ky2-3xbwe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:grid-on-sharp"} {...others} />);
}

export default Component;
