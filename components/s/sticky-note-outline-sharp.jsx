import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dbluobbon {
  fill: currentColor;
  d: path("M16 21H3V3h18v13zm-1-2v-4h4V5H5v14zm-4-3h2v-6h3V8H8v2h3zm-6 3V5z");
}
</style><path class="dbluobbon"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:sticky-note-outline-sharp"} {...others} />);
}

export default Component;
