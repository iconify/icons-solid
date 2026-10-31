import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/v/vfmmczqpo.css';
import '../../css/d/d6r5-sbwg.css';
import '../../css/i/ilhka37bo.css';
import '../../css/p/pfgi2nbvf.css';
import '../../css/w/wrc723bxq.css';
import '../../css/b/b_k3lw8zz.css';
import '../../css/p/pe_qd6vys.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="vfmmczqpo"/><path class="d6r5-sbwg"/><path class="ilhka37bo wm-shine"/><path class="pfgi2nbvf wm-k"/><path class="wm-a wrc723bxq"/><path class="b_k3lw8zz"/><path class="pe_qd6vys"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:ungroup"} {...others} />);
}

export default Component;
