import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/t/tqa8pdbmo.css';
import '../../css/c/cvhq7ysee.css';
import '../../css/h/h6qebr9or.css';
import '../../css/q/q0tbipk_b.css';
import '../../css/w/wfupqcc6c.css';
import '../../css/y/yr-l_2k3y.css';
import '../../css/w/wrfpmqbfu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="tqa8pdbmo"/><path class="cvhq7ysee"/><path class="h6qebr9or wm-shine"/><path class="q0tbipk_b wm-k"/><path class="wfupqcc6c wm-a"/><path class="yr-l_2k3y"/><path class="wrfpmqbfu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:stroller"} {...others} />);
}

export default Component;
