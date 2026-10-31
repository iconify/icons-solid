import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/v/vbpmzobns.css';
import '../../css/o/opy7lxk9w.css';
import '../../css/f/fci040b3y.css';
import '../../css/y/y3j3vjb4e.css';
import '../../css/z/zrrjdvbzr.css';
import '../../css/z/z6qceorkr.css';
import '../../css/v/vmz79pr-y.css';
import '../../css/m/mq-36jb3l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="vbpmzobns"/><path class="opy7lxk9w"/><path class="fci040b3y wm-shine"/><path class="wm-k y3j3vjb4e"/><path class="wm-a zrrjdvbzr"/><path class="z6qceorkr"/><path class="vmz79pr-y"/><path class="mq-36jb3l wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:briefcase"} {...others} />);
}

export default Component;
