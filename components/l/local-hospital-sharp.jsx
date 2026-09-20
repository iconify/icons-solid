import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t0exxcbao {
  fill: currentColor;
  d: path("M10.5 17h3v-3.5H17v-3h-3.5V7h-3v3.5H7v3h3.5zM3 21V3h18v18z");
}
</style><path class="t0exxcbao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:local-hospital-sharp"} {...others} />);
}

export default Component;
