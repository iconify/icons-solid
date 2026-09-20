import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tr89f0dex.css';
import '../../css/s/smj96-b8a.css';
import '../../css/f/fqokllb_k.css';
import '../../css/s/s4_rz9bct.css';
import '../../css/z/z1m53ac0z.css';
import '../../css/j/jk8v1nprn.css';
import '../../css/v/v8h46jbfe.css';
import '../../css/p/p8x9wybhf.css';
import '../../css/w/wycjhibbk.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGkRCCwb7V)"><path class="tr89f0dex"/><path class="smj96-b8a"/><path class="fqokllb_k"/><path class="s4_rz9bct"/><path class="z1m53ac0z"/><path class="jk8v1nprn"/><path class="v8h46jbfe"/><path class="p8x9wybhf"/></g><defs><clipPath id="SVGkRCCwb7V"><path class="wycjhibbk"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"unjs:get-port-please"} {...others} />);
}

export default Component;
