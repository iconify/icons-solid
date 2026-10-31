import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/r/rro71smne.css';
import '../../css/f/f5vyjs3cp.css';
import '../../css/e/ei78qw1bk.css';
import '../../css/q/qwc4vnbsf.css';
import '../../css/i/idtixcqse.css';
import '../../css/y/y64zqrxgb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="rro71smne"/><path class="f5vyjs3cp wm-shine"/><path class="ei78qw1bk wm-k"/><path class="qwc4vnbsf wm-a"/><path class="idtixcqse wm-s"/><path class="wm-deco y64zqrxgb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:siren"} {...others} />);
}

export default Component;
