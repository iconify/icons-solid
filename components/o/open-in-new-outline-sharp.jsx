import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p33sbv5dk {
  fill: currentColor;
  d: path("M4 20V4h7.23v1H5v14h14v-6.23h1V20zm5.739-5.03l-.708-.709L18.292 5H14V4h6v6h-1V5.708z");
}
</style><path class="p33sbv5dk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:open-in-new-outline-sharp"} {...others} />);
}

export default Component;
