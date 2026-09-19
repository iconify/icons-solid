import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aq0sxebcq {
  fill: currentColor;
  d: path("M9 16h6v-6h4l-7-7l-7 7h4zm3-10.17L14.17 8H13v6h-2V8H9.83zM5 18h14v2H5z");
}
</style><path class="aq0sxebcq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-upload"} {...others} />);
}

export default Component;
