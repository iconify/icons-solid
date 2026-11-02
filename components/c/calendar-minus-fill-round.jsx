import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r5jqo_aix {
  fill: currentColor;
  d: path("M7 3a1 1 0 0 1 2 0v1h6V3a1 1 0 0 1 2 0v1.099A5.01 5.01 0 0 1 21 9v8a5 5 0 0 1-1.464 3.536A5 5 0 0 1 16 22H8a5 5 0 0 1-5-5V9a5.01 5.01 0 0 1 4-4.901ZM5 17a3.004 3.004 0 0 0 3 3h8a3 3 0 0 0 3-3v-7H5Zm4-3h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2");
}
</style><path class="r5jqo_aix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:calendar-minus-fill-round"} {...others} />);
}

export default Component;
