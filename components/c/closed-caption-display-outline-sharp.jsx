import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vrdtwjrtl {
  fill: currentColor;
  d: path("M5 18V6zm1-9v6h3v-1.5H7.5v-3h2v.5H11V9zm7 0v3h1.5v-1.5h2v.5H18V9zM3 20V4h18v8h-2V6H5v12h4v2zm8 2v-8h11v8zm2-2h7v-4h-7z");
}
</style><path class="vrdtwjrtl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:closed-caption-display-outline-sharp"} {...others} />);
}

export default Component;
