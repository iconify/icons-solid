import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rec5gmbbj {
  fill: currentColor;
  d: path("M3 21V3h18v18zm3-7h12v-2H6zm0 3h12v-1.5H6z");
}
</style><path class="rec5gmbbj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:post-sharp"} {...others} />);
}

export default Component;
