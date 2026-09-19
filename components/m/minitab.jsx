import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pe_wzbcyr.css';
import '../../css/e/edj89-btu.css';
import '../../css/a/a2gzbfbcc.css';
import '../../css/e/eowx9ec_h.css';
import '../../css/p/p-zqhl1tt.css';
import '../../css/p/pyzaodb0s.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="pe_wzbcyr"/><linearGradient id="SVGuCWSHcfP" x1="99.32" x2="21.21" y1="-254.43" y2="-332.79" gradientTransform="translate(0 374)" gradientUnits="userSpaceOnUse"><stop offset="0" class="edj89-btu"/><stop offset="1" class="a2gzbfbcc"/></linearGradient><path fill="url(#SVGuCWSHcfP)" class="eowx9ec_h"/><path class="p-zqhl1tt"/><path class="pyzaodb0s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:minitab"} {...others} />);
}

export default Component;
