import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/i/i8nw46hat.css';
import '../../css/y/yenevj88w.css';
import '../../css/r/rm-5e-b9q.css';
import '../../css/u/urb3kpbld.css';
import '../../css/i/idk2wtbbi.css';
import '../../css/o/ospxv6bzk.css';
import '../../css/v/veqyjjjsz.css';
import '../../css/p/p3a4-zbci.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="i8nw46hat"/><path class="yenevj88w"/><path class="rm-5e-b9q wm-shine"/><path class="urb3kpbld wm-k"/><path class="idk2wtbbi wm-a"/><path class="ospxv6bzk"/><path class="veqyjjjsz"/><path class="p3a4-zbci wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:droplets"} {...others} />);
}

export default Component;
