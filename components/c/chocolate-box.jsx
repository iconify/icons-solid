import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/j/jmroy3ati.css';
import '../../css/l/l6i4z6k_y.css';
import '../../css/u/uh01hzbyb.css';
import '../../css/s/s5fsn4tdx.css';
import '../../css/x/xc_je6bwo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="jmroy3ati"/><path class="l6i4z6k_y wm-shine"/><path class="uh01hzbyb wm-k"/><path class="s5fsn4tdx wm-a"/><path class="wm-deco xc_je6bwo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:chocolate-box"} {...others} />);
}

export default Component;
