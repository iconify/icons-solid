import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/roc75q_vq.css';
import '../../css/t/t1zyap3om.css';
import '../../css/e/e6a0x5b1k.css';
import '../../css/u/uirl5bcnd.css';
import '../../css/u/u-onlu_fk.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGFppljd8t" x1="-12.8" x2="524.8" y1="100.8" y2="411.2" gradientUnits="userSpaceOnUse"><stop offset="0" class="roc75q_vq"/><stop offset=".202" class="t1zyap3om"/><stop offset=".563" class="e6a0x5b1k"/><stop offset="1" class="uirl5bcnd"/></linearGradient><path fill="url(#SVGFppljd8t)" class="u-onlu_fk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:velld"} {...others} />);
}

export default Component;
