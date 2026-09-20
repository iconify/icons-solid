import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yuv4zy4xa {
  fill: currentColor;
  d: path("M8 20V4h8v16z");
}
</style><path class="yuv4zy4xa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:crop-9-16-sharp"} {...others} />);
}

export default Component;
