import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ximgy8b5z {
  fill: currentColor;
  d: path("M6 16h7v-3H6zm9 0h3V8h-3zm-9-5h7V8H6zm-4 9V4h20v16z");
}
</style><path class="ximgy8b5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:contextual-token-sharp"} {...others} />);
}

export default Component;
