import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vq29xabcs {
  fill: currentColor;
  d: path("M9.5 13.385h-6v-1h6zm6.827 4.577V7.473l-2.53 1.766l-.574-.827l3.37-2.373h.791v11.923z");
}
</style><path class="vq29xabcs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:exposure-neg-1-outline"} {...others} />);
}

export default Component;
