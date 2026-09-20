import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.giwswjaxb {
  fill: currentColor;
  d: path("m14 21l-1.425-1.425l3.6-3.575H5V4h2v10h9.175l-3.6-3.6l1.4-1.425L20 15z");
}
</style><path class="giwswjaxb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:subdirectory-arrow-right-outline-sharp"} {...others} />);
}

export default Component;
