import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oa_g57bfw.css';
import '../../css/f/fcwtjkw9c.css';
import '../../css/a/a0towncrl.css';
import '../../css/m/mmj3d6bii.css';
import '../../css/a/amd974b-x.css';
import '../../css/d/dncz44ben.css';
import '../../css/a/a5fpl40sl.css';
import '../../css/y/yzevok67q.css';
import '../../css/n/nhhqrl_lw.css';
import '../../css/q/qb62esbhk.css';
import '../../css/b/b3c_m0b0h.css';
import '../../css/p/p-rupabpf.css';
import '../../css/n/ntw6isbco.css';
import '../../css/w/w3ix8nbnc.css';
import '../../css/k/kn-bltb7k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="oa_g57bfw wm-shadow"/><path class="fcwtjkw9c wm-k"/><path class="a0towncrl wm-k"/><path class="mmj3d6bii wm-k"/><path class="amd974b-x wm-k"/><path class="dncz44ben wm-k"/><path class="a5fpl40sl wm-shine"/><path class="wm-k yzevok67q"/><path class="nhhqrl_lw wm-k"/><path class="qb62esbhk wm-a"/><path class="b3c_m0b0h wm-a"/><path class="p-rupabpf wm-a"/><path class="ntw6isbco wm-a"/><path class="w3ix8nbnc wm-a"/><path class="kn-bltb7k wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:file-text"} {...others} />);
}

export default Component;
