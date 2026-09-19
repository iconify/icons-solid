import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yizktvb6m {
  fill: currentColor;
  d: path("M5 4v2h14V4zm0 10h4v6h6v-6h4l-7-7z");
}
</style><path class="yizktvb6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:publish"} {...others} />);
}

export default Component;
