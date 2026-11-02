import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nh9n6fbwp {
  fill: currentColor;
  d: path("M3.708 8.496c1.934-4.578 7.216-6.721 11.795-4.786a9 9 0 0 1 4.787 11.793A9 9 0 0 1 8.497 20.29c-4.578-1.934-6.724-7.215-4.789-11.794");
}
</style><path class="nh9n6fbwp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:radio-fill-sharp"} {...others} />);
}

export default Component;
