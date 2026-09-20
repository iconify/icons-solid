import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hwo7aabiv {
  fill: currentColor;
  d: path("M2 21V3h10v4h10v14zm2-2h6v-2H4zm0-4h6v-2H4zm0-4h6V9H4zm0-4h6V5H4zm8 12h8V9h-8zm2-6v-2h4v2zm0 4v-2h4v2z");
}
</style><path class="hwo7aabiv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:corporate-fare"} {...others} />);
}

export default Component;
