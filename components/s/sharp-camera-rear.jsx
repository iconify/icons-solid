import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m1lfvu4kh {
  fill: currentColor;
  d: path("M10 20H5v2h5v2l3-3l-3-3zm4 0v2h5v-2zm5-20H5v18h14zm-7 6c-1.11 0-2-.9-2-2s.89-2 1.99-2s2 .9 2 2C14 5.1 13.1 6 12 6");
}
</style><path class="m1lfvu4kh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-camera-rear"} {...others} />);
}

export default Component;
