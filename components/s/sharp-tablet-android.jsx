import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h1gibbcfq {
  fill: currentColor;
  d: path("M21 0H3v24h18zm-7 22h-4v-1h4zm5.25-3H4.75V3h14.5z");
}
</style><path class="h1gibbcfq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-tablet-android"} {...others} />);
}

export default Component;
