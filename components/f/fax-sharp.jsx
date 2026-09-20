import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rm2-ncjsp {
  fill: currentColor;
  d: path("M8 20V4h10v5h4v11zm-6 1h5V8H2zm8-12h6V6h-6zm0 8h4v-5h-4zm5-3h2v-2h-2zm3 0h2v-2h-2zm-3 3h2v-2h-2zm3 0h2v-2h-2z");
}
</style><path class="rm2-ncjsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:fax-sharp"} {...others} />);
}

export default Component;
