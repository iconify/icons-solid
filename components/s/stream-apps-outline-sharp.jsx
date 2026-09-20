import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bcmprk0la {
  fill: currentColor;
  d: path("M16 13h5v-3h-5zm-2 4V8h9v7h-7zm-9 6V1h14v6h-2V6H7v12h10v-1h2v6zm2-3v1h10v-1zM7 4h10V3H7zm0 0V3zm0 16v1zm9-7v-3z");
}
</style><path class="bcmprk0la"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:stream-apps-outline-sharp"} {...others} />);
}

export default Component;
