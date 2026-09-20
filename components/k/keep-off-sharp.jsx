import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ixqq7sb3l {
  fill: currentColor;
  d: path("M17 3v2h-1v8.175L7.825 5L7 4.175V3zm-5 20l-1-1v-6H6v-2l2-2v-1.15L1.4 4.2l1.4-1.4l18.4 18.4l-1.45 1.4l-6.6-6.6H13v6z");
}
</style><path class="ixqq7sb3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:keep-off-sharp"} {...others} />);
}

export default Component;
