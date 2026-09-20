import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jthz79b4x {
  fill: currentColor;
  d: path("M2.5 18V6h12v12zm14-7V6h5v5zM4.692 14.904h7.616l-2.433-3.25L8 14.154l-1.375-1.825zM16.5 18v-5h5v5z");
}
</style><path class="jthz79b4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:gallery-thumbnail-sharp"} {...others} />);
}

export default Component;
