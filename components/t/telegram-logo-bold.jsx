import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.bcf5ezbvf {
  fill: currentColor;
  d: path("M231.49 23.16a13 13 0 0 0-13.23-2.26L15.6 100.21a18.22 18.22 0 0 0 3.12 34.86L68 144.74V200a20 20 0 0 0 34.4 13.88l22.67-23.51L162.35 223a20 20 0 0 0 32.7-10.54l40.62-176.55a13 13 0 0 0-4.18-12.75m-92.08 54.36l-62.19 44.57l-34.43-6.75ZM92 190.06v-28.71l15 13.15Zm81.16 10.52l-73.88-64.77l106.31-76.18Z");
}
</style><path class="bcf5ezbvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:telegram-logo-bold"} {...others} />);
}

export default Component;
