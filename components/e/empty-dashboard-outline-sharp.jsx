import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hkxi55b8m {
  fill: currentColor;
  d: path("M6.308 17.692h5.038v-3.538H6.308zm0-4.846h5.038V6.308H6.308zm6.346 4.846h5.038v-6.538h-5.038zm0-7.846h5.038V6.308h-5.038zM4 20V4h16v3.77h1.539v1H20v2.73h1.539v1H20v2.73h1.539v1H20V20zm1-1h14V5H5zM5 5v14z");
}
</style><path class="hkxi55b8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:empty-dashboard-outline-sharp"} {...others} />);
}

export default Component;
