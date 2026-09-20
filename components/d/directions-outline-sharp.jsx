import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k9tv3nblc {
  fill: currentColor;
  d: path("M8 15h2v-3h3.5v2.5L17 11l-3.5-3.5V10H8zm4 7.8L1.2 12L12 1.2L22.8 12zm0-2.8l8-8l-8-8l-8 8zm0-8");
}
</style><path class="k9tv3nblc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:directions-outline-sharp"} {...others} />);
}

export default Component;
