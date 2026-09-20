import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q-sfsnblz {
  fill: currentColor;
  d: path("m16 11l-4 4l-4-4l1.4-1.4l1.6 1.55V7h2v4.15l1.6-1.55zm-6 9h4v-1h-4zm-5 3V1h14v22zm2-5v3h10v-3zm0-2h10V6H7zM7 4h10V3H7zm0 14v3zM7 4V3z");
}
</style><path class="q-sfsnblz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:app-promo-outline-sharp"} {...others} />);
}

export default Component;
