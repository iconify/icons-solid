import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/p/pf12oeo3x.css';
import '../../css/g/gz99lcc6k.css';
import '../../css/r/rra-3pbqn.css';
import '../../css/m/msg-lzl0e.css';
import '../../css/g/g85hpr30a.css';
import '../../css/e/e88n4oijh.css';
import '../../css/f/f-k5oeq-j.css';
import '../../css/w/w3r45wbbs.css';
import '../../css/e/exokqgbyl.css';
import '../../css/h/hgwkt6ble.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="pf12oeo3x"/><path class="gz99lcc6k"/><path class="rra-3pbqn wm-s"/><path class="msg-lzl0e"/><path class="g85hpr30a wm-shine"/><path class="e88n4oijh wm-k"/><path class="f-k5oeq-j wm-a"/><path class="w3r45wbbs wm-s"/><path class="exokqgbyl"/><path class="hgwkt6ble"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:monitor-smartphone"} {...others} />);
}

export default Component;
