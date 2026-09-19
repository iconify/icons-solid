import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a4294trox {
  fill: currentColor;
  d: path("M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 18H6V4h5v7l2.5-1.5L16 11V4h2zm-4.38-6.5L17 18H7l2.38-3.17L11 17z");
}
</style><path class="a4294trox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-photo-album"} {...others} />);
}

export default Component;
