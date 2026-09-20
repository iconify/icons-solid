import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pm1kgrbpr {
  fill: currentColor;
  d: path("M5 19h14V9.825L14.175 5H5zm0 2q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h10l6 6v10q0 .825-.587 1.413T19 21zm2-4h10v-2H7zm0-4h10v-2H7zm0-4h7V7H7zM5 19V5z");
}
</style><path class="pm1kgrbpr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:text-snippet-outline"} {...others} />);
}

export default Component;
