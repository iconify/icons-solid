import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dzw3lhjtj {
  fill: currentColor;
  d: path("M8.6 16.6L4 12l4.6-4.6L10 8.85L6.85 12L10 15.15zM5 17h2v1h10v-1h2v6H5zM7 7H5V1h14v6h-2V6H7zm8.4 9.6L14 15.15L17.15 12L14 8.85l1.4-1.45L20 12z");
}
</style><path class="dzw3lhjtj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:developer-mode-sharp"} {...others} />);
}

export default Component;
