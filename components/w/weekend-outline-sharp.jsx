import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.trb6cqboq {
  fill: currentColor;
  d: path("M1 20V9h3V4h16v5h3v11zm6-6h10V9h1V6H6v3h1zm-4 4h18v-7h-2v5H5v-5H3zm9-2");
}
</style><path class="trb6cqboq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:weekend-outline-sharp"} {...others} />);
}

export default Component;
