import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nkw2qhbmg {
  fill: currentColor;
  d: path("M3 18.135V5.884h8.5V4h1v1.885H21v12.25h-8.5V20h-1v-1.866zm1-1h7.5v-2.75H4zm0-7.5h7.5v-2.75H4zm0 3.75h10.327v-2.75H4zm8.5 3.75H20V6.884h-7.5v2.75h2.827v4.75H12.5zM4 13.385v-2.75z");
}
</style><path class="nkw2qhbmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:bullet-chart-outline-sharp"} {...others} />);
}

export default Component;
