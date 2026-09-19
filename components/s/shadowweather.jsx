import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.p50tnjbth {
  fill: none;
  stroke: currentColor;
  stroke-miterlimit: 10;
  d: path("M31.222 15.887A10.918 10.918 0 0 0 11.1 23.474a6.998 6.998 0 0 0 .397 13.985h21.167a10.835 10.835 0 1 0-7.65-18.508");
}
</style><path class="p50tnjbth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:shadowweather"} {...others} />);
}

export default Component;
