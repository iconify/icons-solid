import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v_fd2_g3j {
  fill: currentColor;
  d: path("M7.962 3h8.076L14 5.892V10.5h-4V5.892zM10 11.5h4v3h-4zm0 4h4v3.077l-2 2l-2-2z");
}
</style><path class="v_fd2_g3j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:home-improvement-and-tools-sharp"} {...others} />);
}

export default Component;
