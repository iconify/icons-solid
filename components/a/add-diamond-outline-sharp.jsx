import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mc_0e9tih {
  fill: currentColor;
  d: path("M11.5 15.616h1V12.5h3.116v-1H12.5V8.385h-1V11.5H8.385v1H11.5zm.506 6.061L2.34 12l9.665-9.671L21.66 12zM12 20.269L20.264 12L12 3.73L3.737 12zM12 12");
}
</style><path class="mc_0e9tih"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:add-diamond-outline-sharp"} {...others} />);
}

export default Component;
