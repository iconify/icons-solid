import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f5cxjlb6z {
  fill: currentColor;
  d: path("m4.672 10.781l4-6a4 4 0 0 1 6.656 0l4 6A4 4 0 0 1 16 17H8a4 4 0 0 1-3.328-6.219M19 21H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2");
}
</style><path class="f5cxjlb6z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:eject-fill-round"} {...others} />);
}

export default Component;
