import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r91wdndhw {
  fill: currentColor;
  d: path("M10 20H5v2h5v2l3-3l-3-3zm4 0v2h5v-2zM12 8c1.1 0 2-.9 2-2s-.9-2-2-2s-1.99.9-1.99 2S10.9 8 12 8m7-8H5v18h14zM7 2h10v10.5c0-1.67-3.33-2.5-5-2.5s-5 .83-5 2.5z");
}
</style><path class="r91wdndhw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-camera-front"} {...others} />);
}

export default Component;
