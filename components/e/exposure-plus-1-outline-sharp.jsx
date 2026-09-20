import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hqf5tacmw {
  fill: currentColor;
  d: path("M6.5 16.385v-3h-3v-1h3v-3h1v3h3v1h-3v3zm9.827 1.576V7.474l-2.53 1.766l-.574-.827l3.37-2.373h.791v11.923z");
}
</style><path class="hqf5tacmw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:exposure-plus-1-outline-sharp"} {...others} />);
}

export default Component;
