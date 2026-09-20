import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w0bqlzbrq {
  fill: currentColor;
  d: path("M2 21V3h18v4h2v2h-2v2h2v2h-2v2h2v2h-2v4zm4-4h5v-4H6zm6-7h4V7h-4zm-6 2h5V7H6zm6 5h4v-6h-4z");
}
</style><path class="w0bqlzbrq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:developer-board-sharp"} {...others} />);
}

export default Component;
