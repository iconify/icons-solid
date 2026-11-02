import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d9-vbfqmj {
  fill: currentColor;
  d: path("M8 11c0-1.33.522-2.597 1.464-3.536A5 5 0 0 1 13 6a1 1 0 0 1 0 2c-1.27 0-2.405.804-2.83 2H12a4 4 0 1 1-4 4Zm2 1v2a2 2 0 1 0 2-2Z");
}
</style><path class="d9-vbfqmj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:quote-single-left-bulk-round"} {...others} />);
}

export default Component;
