import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k4n51fjcs {
  fill: currentColor;
  d: path("M15 14h1.5v1.5H15z");
}

.mo2x3vb4k {
  fill: currentColor;
  d: path("M3 3v18h18V3zm5 2.5h3v6H9.5V7H8zm4.5 13H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zm.5-13h3v6h-1.5V7H13zM18 17h-3v1.5h-1.5v-6H18z");
}
</style><path class="mo2x3vb4k"/><path class="k4n51fjcs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-11mp"} {...others} />);
}

export default Component;
