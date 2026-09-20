import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.meinyobsi {
  fill: currentColor;
  d: path("M3 20.077V3h18v14H6.077z");
}
</style><path class="meinyobsi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:chat-bubble-sharp"} {...others} />);
}

export default Component;
