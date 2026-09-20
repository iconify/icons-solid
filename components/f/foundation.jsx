import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yfvgqhkbe {
  fill: currentColor;
  d: path("M5 21v-4H3v-2h2v-4.15L2.2 13L1 11.4L12 3l11 8.4l-1.2 1.6l-2.8-2.15V15h2v2h-2v4h-2v-4h-4v4h-2v-4H7v4zm2-6h4V6.275l-4 3.05zm6 0h4V9.325l-4-3.05z");
}
</style><path class="yfvgqhkbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:foundation"} {...others} />);
}

export default Component;
