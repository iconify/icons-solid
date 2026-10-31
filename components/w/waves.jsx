import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lfx2q59bg.css';
import '../../css/w/wyipgobsb.css';
import '../../css/s/sytrc3r6e.css';
import '../../css/g/ge6vg2t9g.css';
import '../../css/p/pzrz5hymy.css';
import '../../css/n/nft-tkznh.css';
import '../../css/w/wo44shb6h.css';
import '../../css/a/abude4zlw.css';
import '../../css/t/t8z26ebzu.css';
import '../../css/p/pw7o4_b4x.css';
import '../../css/i/inyciobpw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lfx2q59bg wm-shadow"/><path class="wm-a wyipgobsb"/><path class="sytrc3r6e wm-a"/><path class="ge6vg2t9g wm-a"/><path class="pzrz5hymy wm-a"/><path class="nft-tkznh wm-shine"/><path class="wm-k wo44shb6h"/><path class="abude4zlw wm-k"/><path class="t8z26ebzu wm-k"/><path class="pw7o4_b4x wm-k"/><path class="inyciobpw wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-coquette:waves"} {...others} />);
}

export default Component;
