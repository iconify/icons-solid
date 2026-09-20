import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rz60q6vwo.css';
import '../../css/s/sh6-s11qn.css';
import '../../css/x/xiuubmb4i.css';
import '../../css/g/gxfoiqbni.css';
import '../../css/m/m8dkdkili.css';
import '../../css/h/hgz2cdc-v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rz60q6vwo"/><path class="sh6-s11qn"/><path class="xiuubmb4i"/><path class="gxfoiqbni"/><path class="m8dkdkili"/><path class="hgz2cdc-v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:headset-pulse"} {...others} />);
}

export default Component;
