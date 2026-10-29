import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ttb9vofrh.css';
import '../../css/f/f9vmvyb3v.css';
import '../../css/h/h7ua57bep.css';
import '../../css/k/ks5_65ogy.css';
import '../../css/a/a2dhxzpnc.css';
import '../../css/c/cvzb48blq.css';
import '../../css/o/ow4jo-bix.css';
import '../../css/n/nfrnbv6_z.css';
import '../../css/f/fomj00mpt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ttb9vofrh wm-shadow"/><path class="f9vmvyb3v wm-shadow"/><path class="h7ua57bep"/><path class="ks5_65ogy"/><path class="a2dhxzpnc"/><path class="cvzb48blq"/><path class="ow4jo-bix wm-shine"/><path class="nfrnbv6_z wm-shine"/><path class="fomj00mpt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:chevron-right"} {...others} />);
}

export default Component;
