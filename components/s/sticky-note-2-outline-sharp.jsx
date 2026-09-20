import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r9vyrhbsl {
  fill: currentColor;
  d: path("M5 19h9v-5h5V5H5zm-2 2V3h18v12l-6 6zm4-7v-2h5v2zm0-4V8h10v2zm-2 9V5z");
}
</style><path class="r9vyrhbsl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:sticky-note-2-outline-sharp"} {...others} />);
}

export default Component;
