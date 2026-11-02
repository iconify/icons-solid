import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.it0rrpb1y {
  fill: currentColor;
  d: path("M17.999 19H10a1 1 0 0 1 0-2h5.586L5.293 6.707a.999.999 0 1 1 1.414-1.414L17 15.586V10a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1Z");
}
</style><path class="it0rrpb1y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-down-right-large-bulk"} {...others} />);
}

export default Component;
