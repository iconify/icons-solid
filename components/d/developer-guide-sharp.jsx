import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ski1y769p {
  fill: currentColor;
  d: path("M3 21V3h18v18zm9-16v7l2.5-1.5L17 12V5z");
}
</style><path class="ski1y769p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:developer-guide-sharp"} {...others} />);
}

export default Component;
