import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.vcps7gtkv {
  fill: currentColor;
  d: path("M17 13.5a.5.5 0 0 1-.324.468l-8 3a.5.5 0 1 1-.351-.936L11 15.028v-3.057l-2.675-1.003a.5.5 0 1 1 .35-.936l8 3A.5.5 0 0 1 17 13.5m-1.924 0L12 12.346v2.307zM5 16.5a.5.5 0 1 0 1 0V4.707l1.146 1.146a.5.5 0 0 0 .708-.707l-2-2A.5.5 0 0 0 5.503 3h-.006a.5.5 0 0 0-.35.146l-2 2a.5.5 0 1 0 .707.707L5 4.707zm8-7a.5.5 0 0 0 1 0V4.707l1.146 1.146a.5.5 0 0 0 .708-.707l-2-2a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 .708.707L13 4.707z");
}
</style><path class="vcps7gtkv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-direction-rotate-90-rtl-20-regular"} {...others} />);
}

export default Component;
