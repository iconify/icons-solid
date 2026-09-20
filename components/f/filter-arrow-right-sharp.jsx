import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d-hf8vdlx {
  fill: currentColor;
  d: path("M9 20v-7L1.95 4h18.1L13 13v7zm10-1l-1.4-1.4l1.575-1.6H15v-2h4.175L17.6 12.4L19 11l4 4zm-8-6.7L15.95 6h-9.9z");
}
</style><path class="d-hf8vdlx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:filter-arrow-right-sharp"} {...others} />);
}

export default Component;
