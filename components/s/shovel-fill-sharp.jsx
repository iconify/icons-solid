import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j4xp8z6hd {
  fill: currentColor;
  d: path("m15.707 4.293l4 4a.999.999 0 1 1-1.414 1.414L17 8.414L12.414 13l2.293 2.293a1 1 0 0 1 0 1.414l-2 2A1 1 0 0 1 12 19H6a1 1 0 0 1-1-1v-6c0-.265.105-.52.293-.707l2-2a1 1 0 0 1 1.414 0L11 11.586L15.586 7l-1.293-1.293a.999.999 0 1 1 1.414-1.414");
}
</style><path class="j4xp8z6hd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:shovel-fill-sharp"} {...others} />);
}

export default Component;
