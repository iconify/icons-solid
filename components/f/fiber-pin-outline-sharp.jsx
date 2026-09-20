import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ahdru1gzx {
  fill: currentColor;
  d: path("M5 15h1.5v-2H10V9H5zm6.25 0h1.5V9h-1.5zM14 15h1.25v-3.5L17.8 15H19V9h-1.25v3.5L15.25 9H14zm-7.5-3.5v-1h2v1zM2 20V4h20v16zm2-2h16V6H4zm0 0V6z");
}
</style><path class="ahdru1gzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:fiber-pin-outline-sharp"} {...others} />);
}

export default Component;
