import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s19aowben.css';
import '../../css/g/gu4phnm0x.css';
import '../../css/k/kfn-_lbds.css';
import '../../css/j/jtti8bn6v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="s19aowben"/><path class="gu4phnm0x"/><path class="kfn-_lbds"/><path class="jtti8bn6v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-arrow-down-minimalistic-line-duotone"} {...others} />);
}

export default Component;
