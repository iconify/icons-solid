import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u8oet6b0x.css';
import '../../css/e/ehn23cc1g.css';
import '../../css/z/zw3du41cv.css';
import '../../css/q/qr4kgza0j.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGumliPbrf" x1="256" x2="256" y1="490.8" y2="25.2" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" class="u8oet6b0x"/><stop offset="1" class="ehn23cc1g"/></linearGradient><path fill="url(#SVGumliPbrf)" class="zw3du41cv"/><path class="qr4kgza0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-powerpoint-2013"} {...others} />);
}

export default Component;
