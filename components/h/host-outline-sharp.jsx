import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lrzbai9qa {
  fill: currentColor;
  d: path("M2 21V3h9v18zm11 0V3h9v18zm-9-2h5V5H4zm11 0h5V5h-5zM5 15h3v-2H5zm11 0h3v-2h-3zM5 12h3v-2H5zm11 0h3v-2h-3zM5 9h3V7H5zm11 0h3V7h-3zM4 19h5zm11 0h5z");
}
</style><path class="lrzbai9qa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:host-outline-sharp"} {...others} />);
}

export default Component;
