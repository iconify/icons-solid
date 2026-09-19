import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vu_-64b-b {
  fill: currentColor;
  d: path("M21 5H3v14h18zm-2 12H5V7h14z");
}
</style><path class="vu_-64b-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-crop-7-5"} {...others} />);
}

export default Component;
