import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ixiqeioib {
  fill: currentColor;
  d: path("M9 20v-6h6v6zm-6.8-7L1 11.4L12 3l4 3.05V4h3v4.35l4 3.05l-1.2 1.6L12 5.525z");
}
</style><path class="ixiqeioib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:roofing-sharp"} {...others} />);
}

export default Component;
