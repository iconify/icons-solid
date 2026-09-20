import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rm9gs0bpl {
  fill: currentColor;
  d: path("M19 20V4h2v16zm-7-3l-1.4-1.4l2.6-2.6H3v-2h10.2l-2.6-2.6L12 7l5 5z");
}
</style><path class="rm9gs0bpl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:horizontal-align-right-sharp"} {...others} />);
}

export default Component;
