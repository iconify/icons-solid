import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v9nanwbmf {
  fill: currentColor;
  d: path("M17 20H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1m3-18H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 10l-2.5-1.5L15 12V4h5z");
}
</style><path class="v9nanwbmf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-collections-bookmark"} {...others} />);
}

export default Component;
