import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fngnv_hoo {
  fill: currentColor;
  d: path("M19.957 11.156A3 3 0 0 1 22 14v3a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3v-3a3 3 0 0 1 2.918-2.999a6 6 0 0 0-11.836 0A3 3 0 0 1 9 14v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-3c0-1.287.824-2.433 2.043-2.844a8.003 8.003 0 0 1 15.914 0");
}
</style><path class="fngnv_hoo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:headphones-fill-round"} {...others} />);
}

export default Component;
