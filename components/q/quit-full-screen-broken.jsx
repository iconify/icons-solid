import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/iwt0w8b9p.css';
import '../../css/n/ni3-i_brl.css';
import '../../css/h/hcke0zwib.css';
import '../../css/p/p2spj-b_a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="iwt0w8b9p"/><path class="ni3-i_brl"/><path class="hcke0zwib"/><path class="p2spj-b_a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:quit-full-screen-broken"} {...others} />);
}

export default Component;
