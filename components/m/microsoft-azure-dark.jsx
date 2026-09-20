import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i4jryvres.css';
import '../../css/r/rw5c_lizo.css';
import '../../css/y/yw8ns2ibw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="i4jryvres"/><linearGradient id="SVGEsmpMgIR" x1="395.32" x2="263.097" y1="89.142" y2="479.761" gradientUnits="userSpaceOnUse"><stop offset="0"/><stop offset="1" class="rw5c_lizo"/></linearGradient><path fill="url(#SVGEsmpMgIR)" class="yw8ns2ibw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-azure-dark"} {...others} />);
}

export default Component;
