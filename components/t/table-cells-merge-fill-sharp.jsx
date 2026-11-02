import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mfx601vaf {
  fill: currentColor;
  d: path("M11 8H3V4a1 1 0 0 1 1-1h7Zm2-5h7a1 1 0 0 1 1 1v4h-8ZM3 14v-4h18v4Zm8 7H4a1 1 0 0 1-1-1v-4h8Zm10-5v4a1 1 0 0 1-1 1h-7v-5Z");
}
</style><path class="mfx601vaf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:table-cells-merge-fill-sharp"} {...others} />);
}

export default Component;
