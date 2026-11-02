import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iugemnp2s {
  fill: currentColor;
  d: path("M9 12v-2a2 2 0 1 0-2 2Zm2 1c0 1.33-.522 2.597-1.464 3.536A5 5 0 0 1 6 18a1 1 0 0 1 0-2c1.27 0 2.405-.804 2.83-2H7a4 4 0 1 1 4-4Zm8-1v-2a2 2 0 1 0-2 2Zm2 1c0 1.33-.522 2.597-1.464 3.536A5 5 0 0 1 16 18a1 1 0 0 1 0-2c1.27 0 2.405-.804 2.83-2H17a4 4 0 1 1 4-4Z");
}
</style><path class="iugemnp2s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:quote-right-fill-round"} {...others} />);
}

export default Component;
