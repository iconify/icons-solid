import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.np-2swg0j {
  fill: currentColor;
  d: path("M11.21 20H5V10h14v4.38l2-2V4h-3V2h-2v2H8V2H6v2H3v18h10.21zm5.33 2.5L13 18.96l1.41-1.41l2.12 2.12l4.24-4.24l1.41 1.41zM10.41 14L12 15.59L10.59 17L9 15.41L7.41 17L6 15.59L7.59 14L6 12.41L7.41 11L9 12.59L10.59 11L12 12.41z");
}
</style><path class="np-2swg0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-free-cancellation"} {...others} />);
}

export default Component;
