import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wl7jcfu7c {
  fill: currentColor;
  d: path("M1 16V8h2v6h3v2zm6 0v-6H5V8h6v2H9v6zm5 0V8h5v2h-3v1h3v2h-3v1h3v2zm8-1v-2h-2v-2h2V9h2v2h2v2h-2v2z");
}
</style><path class="wl7jcfu7c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:lte-plus-mobiledata-sharp"} {...others} />);
}

export default Component;
