import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xafz3uw9j {
  fill: currentColor;
  d: path("M15.675 11.5V5H21v6.5zm-6.325 0V5h5.325v6.5zm-6.325 0V5H8.35v6.5zm0 7.5v-6.5H8.35V19zm6.325 0v-6.5h5.325V19zm6.325 0v-6.5H21V19z");
}
</style><path class="xafz3uw9j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:view-module-sharp"} {...others} />);
}

export default Component;
