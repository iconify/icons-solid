import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bv9u5bcio {
  fill: currentColor;
  d: path("M3 11c0-1.33.522-2.597 1.464-3.536A5 5 0 0 1 8 6a1 1 0 0 1 0 2c-1.27 0-2.405.804-2.83 2H10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm2 1v4h4v-4Zm8-1c0-1.33.522-2.597 1.464-3.536A5 5 0 0 1 18 6a1 1 0 0 1 0 2c-1.27 0-2.405.804-2.83 2H20a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1Zm2 1v4h4v-4Z");
}
</style><path class="bv9u5bcio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:quote-left-bulk-sharp"} {...others} />);
}

export default Component;
