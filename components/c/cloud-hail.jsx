import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/t/tlogsu61g.css';
import '../../css/d/dh32hrbil.css';
import '../../css/s/szo1qpbst.css';
import '../../css/r/rbd70loxo.css';
import '../../css/d/df_konclx.css';
import '../../css/d/d6vgadcpc.css';
import '../../css/v/vg17h0b4x.css';
import '../../css/o/o-ugkf8fy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="tlogsu61g"/><path class="dh32hrbil"/><path class="szo1qpbst wm-shine"/><path class="rbd70loxo wm-k"/><path class="df_konclx wm-a"/><path class="d6vgadcpc"/><path class="vg17h0b4x"/><path class="o-ugkf8fy wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:cloud-hail"} {...others} />);
}

export default Component;
