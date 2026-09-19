import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f59_i0grv {
  fill: currentColor;
  d: path("M21 4H3v16h18zm-2 14H5V6h14z");
}
</style><path class="f59_i0grv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-crop-5-4"} {...others} />);
}

export default Component;
