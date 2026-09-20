import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zf4adxg1q {
  fill: currentColor;
  d: path("M2 22V2h20v16H6zm4-8h8v-2H6zm0-3h12V9H6zm0-3h12V6H6z");
}
</style><path class="zf4adxg1q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:chat-sharp"} {...others} />);
}

export default Component;
