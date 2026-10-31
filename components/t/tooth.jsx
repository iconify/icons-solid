import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/e/e_cl025ue.css';
import '../../css/c/ciiq510ah.css';
import '../../css/d/d5mkv-0fy.css';
import '../../css/w/wjf1ikbgx.css';
import '../../css/x/xupbmfuvg.css';
import '../../css/b/bh06cp5bk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="e_cl025ue"/><path class="ciiq510ah"/><path class="d5mkv-0fy wm-shine"/><path class="wjf1ikbgx"/><path class="xupbmfuvg"/><path class="bh06cp5bk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:tooth"} {...others} />);
}

export default Component;
