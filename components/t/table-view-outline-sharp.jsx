import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zwy2_h9gz {
  fill: currentColor;
  d: path("M6 22V6h16v16zm2-2h5v-3H8zm7 0h5v-3h-5zM2 18V2h16v2H4v14zm6-3h5v-3H8zm7 0h5v-3h-5zm-7-5h12V8H8z");
}
</style><path class="zwy2_h9gz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:table-view-outline-sharp"} {...others} />);
}

export default Component;
