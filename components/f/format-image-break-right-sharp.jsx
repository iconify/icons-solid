import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p4e5arffn {
  fill: currentColor;
  d: path("M3 5V3h18v2zm8 12V7h10v10zm-8 4v-2h18v2z");
}
</style><path class="p4e5arffn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:format-image-break-right-sharp"} {...others} />);
}

export default Component;
