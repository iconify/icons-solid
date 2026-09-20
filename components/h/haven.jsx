import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zfj4n6bhe.css';
import '../../css/c/c_ujhr3-b.css';
import '../../css/o/o53t7ndwk.css';
import '../../css/d/dq8fp07lv.css';
import '../../css/v/vgqse848f.css';
import '../../css/o/o6rvz3b1x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zfj4n6bhe"/><linearGradient id="SVGWJdmXbuX" x1="-1402.077" x2="-1401.077" y1="1.455" y2="2.455" gradientTransform="matrix(358.4 0 0 389.12 502581.188 -504.574)" gradientUnits="userSpaceOnUse"><stop offset="0" class="c_ujhr3-b"/><stop offset="1" class="o53t7ndwk"/></linearGradient><path fill="url(#SVGWJdmXbuX)" class="dq8fp07lv"/><path class="vgqse848f"/><path class="o6rvz3b1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:haven"} {...others} />);
}

export default Component;
