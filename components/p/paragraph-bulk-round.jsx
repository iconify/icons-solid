import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tcgi_3evl {
  fill: currentColor;
  d: path("M11 12V6a3 3 0 1 0 0 6m0 2a5 5 0 0 1 0-10h6a1 1 0 0 1 0 2v13a1 1 0 0 1-2 0V6h-2v13a1 1 0 0 1-2 0Z");
}
</style><path class="tcgi_3evl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:paragraph-bulk-round"} {...others} />);
}

export default Component;
