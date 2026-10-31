import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/g/g9mt46brz.css';
import '../../css/e/ewmfy5qrh.css';
import '../../css/x/xd0veabmf.css';
import '../../css/n/n3jvmegul.css';
import '../../css/k/k-d2lzb1w.css';
import '../../css/p/pub661mel.css';
import '../../css/b/bsoyucc_m.css';
import '../../css/t/tfdb4bhtt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="g9mt46brz"/><path class="ewmfy5qrh"/><path class="wm-shine xd0veabmf"/><path class="n3jvmegul wm-k"/><path class="k-d2lzb1w wm-a"/><path class="pub661mel"/><path class="bsoyucc_m"/><path class="tfdb4bhtt wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:file"} {...others} />);
}

export default Component;
