import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gjif96bjc {
  fill: currentColor;
  d: path("M3 21v-2h18v2zm0-4V3h18v14zm2-2h14V5H5zm0 0V5z");
}
</style><path class="gjif96bjc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:page-footer-outline-sharp"} {...others} />);
}

export default Component;
