import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/c/csvdhzxrj.css';
import '../../css/n/n56fg4bqx.css';
import '../../css/w/w2ug4zbhk.css';
import '../../css/o/olgj5xbvl.css';
import '../../css/v/v9uc2q8gc.css';
import '../../css/v/vsh52w0wq.css';
import '../../css/i/ir3-edayp.css';
import '../../css/w/wk6sd_ldc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="csvdhzxrj"/><path class="n56fg4bqx"/><path class="w2ug4zbhk wm-shine"/><path class="olgj5xbvl wm-k"/><path class="v9uc2q8gc wm-a"/><path class="vsh52w0wq"/><path class="ir3-edayp"/><path class="wk6sd_ldc wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:search"} {...others} />);
}

export default Component;
