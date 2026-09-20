import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bh9vlk6zh {
  fill: currentColor;
  d: path("M4 18.77v-1h16v1zM4 15V9h16v6zm1-1h14v-4H5zM4 6.23v-1h16v1zM5 14v-4z");
}
</style><path class="bh9vlk6zh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:view-day-outline-sharp"} {...others} />);
}

export default Component;
