import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j4_y1sbnt {
  fill: currentColor;
  d: path("M8.586 18H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-5.586l-2.707 2.707a1 1 0 0 1-1.414 0ZM13 6a1 1 0 0 0-2 0v9a1 1 0 0 0 2 0Z");
}
</style><path class="j4_y1sbnt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:book-open-fill-sharp"} {...others} />);
}

export default Component;
