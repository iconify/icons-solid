import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z7q8eobjl {
  fill: currentColor;
  d: path("M8 20v-3.73h5.539v-2.54H8V4h8v16zm-2.615-4.5v-1h7.384v1zm7.155-5.96q.23-.23.23-.54t-.23-.54t-.54-.23t-.54.23t-.23.54t.23.54t.54.23t.54-.23M19 8.5v-5h1v5z");
}
</style><path class="z7q8eobjl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:door-sensor-sharp"} {...others} />);
}

export default Component;
