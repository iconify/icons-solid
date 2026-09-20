import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qkk-07bbh {
  fill: currentColor;
  d: path("M9 15V5v14zm-1 .5h1V19h6V5H9v9.5H8V4h8v16H8zm4-5.73q.31 0 .54-.23t.23-.54t-.23-.54t-.54-.23t-.54.23t-.23.54t.23.54t.54.23m7-6.27h1v5h-1zm-6.23 12H5.384v-1h7.384z");
}
</style><path class="qkk-07bbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:door-sensor-outline-sharp"} {...others} />);
}

export default Component;
