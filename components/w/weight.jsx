import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t8hgf3bsm.css';
import '../../css/x/xy3sa_brb.css';
import '../../css/d/d4pv-t78d.css';
import '../../css/n/n7eyedkrb.css';
import '../../css/h/hf6t9bz_p.css';
import '../../css/m/mmooyc7hz.css';
import '../../css/f/fzmxp9bfd.css';
import '../../css/g/g56lkj29i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t8hgf3bsm wm-k"/><path class="wm-k xy3sa_brb"/><path class="d4pv-t78d wm-k"/><path class="n7eyedkrb wm-shine"/><path class="hf6t9bz_p wm-a"/><path class="mmooyc7hz wm-a"/><path class="fzmxp9bfd wm-a"/><path class="g56lkj29i wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:weight"} {...others} />);
}

export default Component;
