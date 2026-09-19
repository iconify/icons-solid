import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k4n51fjcs {
  fill: currentColor;
  d: path("M15 14h1.5v1.5H15z");
}

.ln4d6tx6p {
  fill: currentColor;
  d: path("M3 3v18h18V3zm9.5 15.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zM10 10h3V9h-2V8h2V7h-3V5.5h4.5v6H10zm8 7h-3v1.5h-1.5v-6H18z");
}
</style><path class="ln4d6tx6p"/><path class="k4n51fjcs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-3mp"} {...others} />);
}

export default Component;
