import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sr8wyxb0n {
  fill: currentColor;
  d: path("M3 2h18a1 1 0 0 1 0 2h-1v2H4V4H3a1 1 0 0 1 0-2m17 6v2H4V8Zm0 4v3a1 1 0 0 1-1 1h-6v.171a3 3 0 1 1-2 0V16H5a1 1 0 0 1-1-1v-3Z");
}
</style><path class="sr8wyxb0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:blinds-fill-sharp"} {...others} />);
}

export default Component;
