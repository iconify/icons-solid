import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i2grdbctc {
  fill: currentColor;
  d: path("M3 17h18v2H3zm16-5v1H5v-1zm2-2H3v5h18zM3 6h18v2H3z");
}
</style><path class="i2grdbctc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-calendar-view-day"} {...others} />);
}

export default Component;
