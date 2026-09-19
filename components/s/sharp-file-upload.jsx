import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n9nlzxm0z {
  fill: currentColor;
  d: path("M5 10h4v6h6v-6h4l-7-7zm0 8v2h14v-2z");
}
</style><path class="n9nlzxm0z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-file-upload"} {...others} />);
}

export default Component;
