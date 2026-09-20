import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tlf759bvs {
  fill: currentColor;
  d: path("M5 23V1h9v2H7v1h7v2H7v12h10v-2h2v7zm2-3v1h10v-1zm11-6l-5-5l1.4-1.4l2.6 2.6V3h2v7.2l2.6-2.6L23 9zM7 4V3zm0 16v1z");
}
</style><path class="tlf759bvs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:install-mobile-outline-sharp"} {...others} />);
}

export default Component;
