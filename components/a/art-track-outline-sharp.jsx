import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ki0p0m5av {
  fill: currentColor;
  d: path("M15 19H1V5h14zM3 17h10V7H3zm14 2V5h2v14zm4 0V5h2v14zM4 15h8l-2.6-3.5L7.5 14l-1.4-1.85zM3 7v10z");
}
</style><path class="ki0p0m5av"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:art-track-outline-sharp"} {...others} />);
}

export default Component;
