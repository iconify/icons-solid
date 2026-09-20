import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dm46g0bog {
  fill: currentColor;
  d: path("M12 22.8L1.2 12L12 1.2L22.8 12zm0-5.8l5-5l-5-5l-1.4 1.4l2.55 2.6H7v2h6.15l-2.55 2.6z");
}
</style><path class="dm46g0bog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:directions-alt-sharp"} {...others} />);
}

export default Component;
