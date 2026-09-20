import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lmcfr_hgq {
  fill: currentColor;
  d: path("M7 2h10l-2 7h4l-2.925 4.225L14.65 11.8l.55-.8h-1.35l-1.175-1.175L14.35 4H9v2.15l-2-2zm3 20v-8H7V9.85L1.375 4.225L2.8 2.8l18.4 18.4l-1.425 1.425L13.75 16.6zm1.825-13.025");
}
</style><path class="lmcfr_hgq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:flash-off-outline-sharp"} {...others} />);
}

export default Component;
