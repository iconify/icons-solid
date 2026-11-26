import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tzyog8hjo.css';
import '../../css/g/gny1ooyue.css';
import '../../css/e/e_bzrod9z.css';
import '../../css/f/f4bt58bzj.css';
import '../../css/k/kwzcqh4ih.css';
import '../../css/b/b0380bchc.css';
import '../../css/z/zf-oquj0k.css';
import '../../css/k/kkim--7xd.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><radialGradient id="SVGLT4jxe6b" cx="75.9" cy="100" r="137.6" gradientUnits="userSpaceOnUse"><stop offset="0" class="tzyog8hjo"/><stop offset=".85" class="gny1ooyue"/><stop offset="1" class="gny1ooyue"/></radialGradient></defs><g transform="matrix(2.6 0 0 2.6 .537 .537)"><path class="e_bzrod9z"/><path fill="url(#SVGLT4jxe6b)" class="f4bt58bzj"/><path class="kwzcqh4ih"/><defs><clipPath id="SVGWHGSTcjy"><path class="b0380bchc"/></clipPath></defs><g clip-path="url(#SVGWHGSTcjy)"><path class="zf-oquj0k"/></g><path class="kkim--7xd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"xero-emoji:basketball"} {...others} />);
}

export default Component;
