import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jvmucqbjj {
  fill: currentColor;
  d: path("m5.279 11l2.772-8.316a1 1 0 0 1 1.898 0L15 17.838l2.051-6.154A1 1 0 0 1 18 11h3a1 1 0 0 1 0 2h-2.279l-2.772 8.316a1 1 0 0 1-1.898 0L9 6.162l-2.051 6.154A1 1 0 0 1 6 13H3a1 1 0 0 1 0-2Z");
}
</style><path class="jvmucqbjj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:activity-bulk-sharp"} {...others} />);
}

export default Component;
