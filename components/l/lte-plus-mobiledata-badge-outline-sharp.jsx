import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zscod1qqs {
  fill: currentColor;
  d: path("M3 19V5zM23 8h-2V5H3v14h18v-3h2v5H1V3h22zM4 16h4v-2H6V8H4zm5.5 0h2v-6H13V8H8v2h1.5zm4.5 0h4v-2h-2v-1h1.5v-2H16v-1h2V8h-4zm6.25-2h1.5v-1.25H23v-1.5h-1.25V10h-1.5v1.25H19v1.5h1.25z");
}
</style><path class="zscod1qqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:lte-plus-mobiledata-badge-outline-sharp"} {...others} />);
}

export default Component;
