import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/emu738-dw.css';
import '../../css/j/jafoz7lhw.css';
import '../../css/q/qefsdwb5a.css';
import '../../css/g/gib74m1dv.css';
import '../../css/t/tla-osbir.css';
import '../../css/m/m47_bdb4t.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><radialGradient id="SVGM8GnPdHr" cx="80.4" cy="65.6" r="137.6" gradientUnits="userSpaceOnUse"><stop offset="0" class="emu738-dw"/><stop offset=".85" class="jafoz7lhw"/><stop offset="1" class="jafoz7lhw"/></radialGradient></defs><path class="qefsdwb5a"/><path fill="url(#SVGM8GnPdHr)" transform="matrix(2.6 0 0 2.6 .537 .537)" class="gib74m1dv"/><path class="tla-osbir"/><path class="m47_bdb4t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"xero-emoji:spade-suit"} {...others} />);
}

export default Component;
