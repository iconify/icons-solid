import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bo0996baq.css';
import '../../css/x/xlxp70bcn.css';
import '../../css/e/e_bco8srs.css';
import '../../css/o/o418gib3a.css';
import '../../css/z/z9v2_26zm.css';
import '../../css/n/ntm6_17ko.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGfA52vdVg" x1="44.378" x2="447.022" y1="386.378" y2="789.022" gradientTransform="translate(0 -278)" gradientUnits="userSpaceOnUse"><stop offset="0" class="bo0996baq"/><stop offset=".948" class="xlxp70bcn"/></linearGradient><path fill="url(#SVGfA52vdVg)" class="e_bco8srs"/><linearGradient id="SVGvEgOvePp" x1="44.337" x2="446.981" y1="386.418" y2="789.062" gradientTransform="translate(0 -278)" gradientUnits="userSpaceOnUse"><stop offset="0" class="bo0996baq"/><stop offset=".948" class="xlxp70bcn"/></linearGradient><path fill="url(#SVGvEgOvePp)" class="o418gib3a"/><path class="z9v2_26zm"/><linearGradient id="SVGmzfENeyX" x1="158.782" x2="561.426" y1="271.974" y2="674.618" gradientTransform="translate(0 -278)" gradientUnits="userSpaceOnUse"><stop offset="0" class="bo0996baq"/><stop offset=".948" class="xlxp70bcn"/></linearGradient><path fill="url(#SVGmzfENeyX)" class="ntm6_17ko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:anonaddy"} {...others} />);
}

export default Component;
