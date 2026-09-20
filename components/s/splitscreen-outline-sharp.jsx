import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pdqs7_96h {
  fill: currentColor;
  d: path("M3 11V3h18v8zm2-2h14V5H5zM3 21v-8h18v8zm2-2h14v-4H5zM5 9V5zm0 10v-4z");
}
</style><path class="pdqs7_96h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:splitscreen-outline-sharp"} {...others} />);
}

export default Component;
