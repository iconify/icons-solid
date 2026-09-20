import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zgbsngblv.css';
import '../../css/x/xdl23sb0e.css';
import '../../css/z/zjhvbexqd.css';
import '../../css/p/pgeacdcrj.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGD0PzcbSw" x1="97.487" x2="522.047" y1="483.902" y2="729.018" gradientTransform="translate(0 -278)" gradientUnits="userSpaceOnUse"><stop offset="0" class="zgbsngblv"/><stop offset="1" class="xdl23sb0e"/></linearGradient><path fill="url(#SVGD0PzcbSw)" class="zjhvbexqd"/><linearGradient id="SVGT2kwWOMz" x1="94.186" x2="518.747" y1="489.619" y2="734.735" gradientTransform="translate(0 -278)" gradientUnits="userSpaceOnUse"><stop offset="0" class="zgbsngblv"/><stop offset="1" class="xdl23sb0e"/></linearGradient><path fill="url(#SVGT2kwWOMz)" class="pgeacdcrj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:jellyfin"} {...others} />);
}

export default Component;
