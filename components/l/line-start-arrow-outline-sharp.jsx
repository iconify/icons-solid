import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vgnj2623o {
  fill: currentColor;
  d: path("M13 19L2 12l11-7v6h9v2h-9zm-2-3.65v-6.7L5.725 12zM11 12");
}
</style><path class="vgnj2623o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:line-start-arrow-outline-sharp"} {...others} />);
}

export default Component;
