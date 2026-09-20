import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r6inevbtp.css';
import '../../css/t/t__4feosd.css';
import '../../css/g/gbp2_kphi.css';
import '../../css/h/hntmrpb7u.css';
import '../../css/u/uecnjtrmm.css';
import '../../css/g/ggy6wyb_v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="r6inevbtp"/><path class="t__4feosd"/><path class="gbp2_kphi"/><path class="hntmrpb7u"/><path class="uecnjtrmm"/><path class="ggy6wyb_v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:picture-6"} {...others} />);
}

export default Component;
