import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aufb6-82k {
  fill: currentColor;
  d: path("M3 21V3h18v18zM5 5v14h14V5h-2v7l-2.5-1.5L12 12V5zm0 14V5z");
}
</style><path class="aufb6-82k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:developer-guide-outline-sharp"} {...others} />);
}

export default Component;
