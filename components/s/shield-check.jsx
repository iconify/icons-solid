import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/y/y2r_andvy.css';
import '../../css/d/dtfbu57zw.css';
import '../../css/i/ibmmwlg8w.css';
import '../../css/o/ouw5kpbrn.css';
import '../../css/u/u-85uwbxz.css';
import '../../css/j/jr5jsbgyw.css';
import '../../css/s/s_7o2s3ul.css';
import '../../css/w/w6d7dy5kp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="y2r_andvy"/><path class="dtfbu57zw"/><path class="ibmmwlg8w wm-shine"/><path class="ouw5kpbrn wm-k"/><path class="u-85uwbxz wm-a"/><path class="jr5jsbgyw"/><path class="s_7o2s3ul"/><path class="w6d7dy5kp wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:shield-check"} {...others} />);
}

export default Component;
