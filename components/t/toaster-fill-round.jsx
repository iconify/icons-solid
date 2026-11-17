import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y39wpzvaw {
  fill: currentColor;
  d: path("M5 5a3 3 0 1 1 6 0v3h2V5a3 3 0 1 1 6 0v3a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3Zm4 3V5a1 1 0 0 0-2 0v3Zm8-3a1 1 0 0 0-2 0v3h2Zm1 8a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0Z");
}
</style><path class="y39wpzvaw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:toaster-fill-round"} {...others} />);
}

export default Component;
