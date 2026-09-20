import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yj-n85ffv.css';
import '../../css/i/i46_xvb3s.css';
import '../../css/n/ne3atzbav.css';
import '../../css/i/iyfihfbby.css';
import '../../css/u/uqdu66o3d.css';
import '../../css/b/bswg7-4lf.css';
import '../../css/m/m0a2dvb6x.css';
import '../../css/c/cxy6m0boi.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="yj-n85ffv"/><path class="i46_xvb3s"/><path class="ne3atzbav"/><path class="iyfihfbby"/><path class="uqdu66o3d"/><path class="bswg7-4lf"/><path class="m0a2dvb6x"/><path class="cxy6m0boi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:man-frowning-medium-dark-skin-tone"} {...others} />);
}

export default Component;
