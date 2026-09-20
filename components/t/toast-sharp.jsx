import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wv6jnluww {
  fill: currentColor;
  d: path("M6.5 17.5h11v-1h-11zM4 20V4h16v16z");
}
</style><path class="wv6jnluww"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:toast-sharp"} {...others} />);
}

export default Component;
