import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nawe4mb2y {
  fill: currentColor;
  d: path("M7 6V3h10v3h1.975L22 12.95V20H2v-7.05L5.025 6zm2 0h6V5H9zm-2 6v-1h2v1h6v-1h2v1h2.4l-1.7-4H6.3l-1.7 4zm0 2H4v4h16v-4h-3v1h-2v-1H9v1H7zm5 0");
}
</style><path class="nawe4mb2y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:service-toolbox-outline-sharp"} {...others} />);
}

export default Component;
