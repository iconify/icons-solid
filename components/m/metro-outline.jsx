import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ftukapb8x {
  fill: currentColor;
  d: path("M3 21V3h4.05L12 16.05L16.9 3H21v18h-3V8.75L13.275 21h-2.55L6 8.825V21z");
}
</style><path class="ftukapb8x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:metro-outline"} {...others} />);
}

export default Component;
