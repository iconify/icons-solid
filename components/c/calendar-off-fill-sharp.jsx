import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.isfc0pbjg {
  fill: currentColor;
  d: path("m2.707 1.293l20 20a.999.999 0 1 1-1.414 1.414l-.824-.824A1 1 0 0 1 20 22H4a1 1 0 0 1-1-1V5c0-.164.04-.325.117-.469L1.293 2.707a.999.999 0 1 1 1.414-1.414M15 3a1 1 0 0 1 2 0v1h3a1 1 0 0 1 1 1v9a1 1 0 0 1-2 0v-4h-4.757l-6-6H15Zm-6.414 7H5v10h13.586Z");
}
</style><path class="isfc0pbjg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:calendar-off-fill-sharp"} {...others} />);
}

export default Component;
