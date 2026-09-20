import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.na_k5v7cb {
  fill: currentColor;
  d: path("M6.308 18.192h.884v-4.5h1.616v3h.884v-3h1.616v4.5h.884v-5.384H6.308zm3.75-6.615h3.884v-.885h-3V9.077h3v-3.27h-3.884v.885h3v1.616h-3zm3.75 6.615h.884v-1.5h3v-3.884h-3.884zm.884-2.384v-2.116h2.116v2.116zM4 20V4h16v16zm1-1h14V5H5zm0 0V5z");
}
</style><path class="na_k5v7cb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:2mp-outline-sharp"} {...others} />);
}

export default Component;
